import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrck--npu.css';
import '../../css/a/a3kaa3-qw.css';
import '../../css/f/fhtwuabpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="mrck--npu"><path class="a3kaa3-qw"/><path class="fhtwuabpl"/></g>`,
		"fallback": "academicons:mtmt",
	});
}

export default Component;
