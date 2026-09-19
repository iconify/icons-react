import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7xqnac9s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7xqnac9s"/>`,
		"fallback": "fluent-mdl2:protect-restrict",
	});
}

export default Component;
