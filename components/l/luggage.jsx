import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7765vlsl.css';
import '../../css/q/q51k3abci.css';
import '../../css/k/ke4xsybbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7765vlsl wm-k"/><path class="q51k3abci wm-k"/><path class="ke4xsybbc wm-a"/>`,
		"fallback": "withicons-bauhaus:luggage",
	});
}

export default Component;
