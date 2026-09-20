import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/w/wkgyj9bgu.css';
import '../../css/w/w7zeav92c.css';
import '../../css/x/xrrf97qjs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="wkgyj9bgu"/><path class="w7zeav92c"/><path class="xrrf97qjs"/></g>`,
		"fallback": "streamline-kameleon-color:soccer-field",
	});
}

export default Component;
