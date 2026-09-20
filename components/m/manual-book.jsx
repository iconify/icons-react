import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o47z8vbtc.css';
import '../../css/i/i3aplqbmt.css';
import '../../css/c/c8flc_b6m.css';
import '../../css/x/xw6fkrbpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o47z8vbtc"/><path class="i3aplqbmt"/><path class="c8flc_b6m"/><path class="xw6fkrbpe"/></g>`,
		"fallback": "streamline-color:manual-book",
	});
}

export default Component;
