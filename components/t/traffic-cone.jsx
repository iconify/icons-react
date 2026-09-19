import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1n7stbtk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1n7stbtk"/>`,
		"fallback": "entypo:traffic-cone",
	});
}

export default Component;
