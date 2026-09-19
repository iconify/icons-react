import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5of_ubiw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5of_ubiw"/>`,
		"fallback": "fluent-mdl2:single-bookmark",
	});
}

export default Component;
