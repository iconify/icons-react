import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dte2kjhbl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dte2kjhbl"/>`,
		"fallback": "fluent-mdl2:people",
	});
}

export default Component;
