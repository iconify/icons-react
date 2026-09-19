import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7xfp2n_l.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7xfp2n_l"/>`,
		"fallback": "fluent-mdl2:orientation-2",
	});
}

export default Component;
