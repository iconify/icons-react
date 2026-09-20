import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cqr75gb2c.css';
import '../../css/p/pvgr4k0ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cqr75gb2c"/><path class="pvgr4k0ex"/></g>`,
		"fallback": "lucide:receipt-japanese-yen",
	});
}

export default Component;
