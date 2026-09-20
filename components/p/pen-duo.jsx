import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0ixkvs5j.css';
import '../../css/g/g0mtsebro.css';
import '../../css/j/j90e0-bnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m0ixkvs5j"/><path class="g0mtsebro"/><path class="j90e0-bnj"/></g>`,
		"fallback": "streamline-kameleon-color:pen-duo",
	});
}

export default Component;
