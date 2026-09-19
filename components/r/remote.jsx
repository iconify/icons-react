import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boz_p5b_s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boz_p5b_s"/>`,
		"fallback": "fluent-mdl2:remote",
	});
}

export default Component;
