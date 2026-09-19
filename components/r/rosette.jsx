import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czh5ncche.css';
import '../../css/c/chx9uvzml.css';
import '../../css/o/ox5-scb3j.css';
import '../../css/g/gy5pnuxbb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czh5ncche"/><path class="chx9uvzml"/><circle class="ox5-scb3j"/><circle class="gy5pnuxbb"/>`,
		"fallback": "fxemoji:rosette",
	});
}

export default Component;
