import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pybti58qc.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/f/f601ckbom.css';
import '../../css/u/ukvmc8bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pybti58qc"/><path class="hq-5njbjh"/><path class="f601ckbom"/><circle class="ukvmc8bfw"/></g>`,
		"fallback": "solar:medical-kit-broken",
	});
}

export default Component;
