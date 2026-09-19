import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfub6qbjo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfub6qbjo"/>`,
		"fallback": "fluent-mdl2:repeat-all",
	});
}

export default Component;
