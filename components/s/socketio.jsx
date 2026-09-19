import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx6tlvbkb.css';
import '../../css/u/uk9yq28xx.css';
import '../../css/d/d3ye85bme.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tx6tlvbkb"><path class="uk9yq28xx"/><path class="d3ye85bme"/></g>`,
		"fallback": "devicon:socketio",
	});
}

export default Component;
