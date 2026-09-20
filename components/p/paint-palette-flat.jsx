import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnz52ebry.css';
import '../../css/g/g7_wtmbhv.css';
import '../../css/m/mocrc9bgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cnz52ebry"/><path clip-rule="evenodd" class="g7_wtmbhv"/><path class="mocrc9bgj"/></g>`,
		"fallback": "streamline-plump-color:paint-palette-flat",
	});
}

export default Component;
