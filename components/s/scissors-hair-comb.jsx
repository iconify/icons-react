import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/inelaxb2s.css';
import '../../css/q/qtxsezbbm.css';
import '../../css/v/ve_txpbjb.css';
import '../../css/s/swsab_86e.css';
import '../../css/c/cxwprnb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="inelaxb2s"/><circle class="qtxsezbbm"/><path class="ve_txpbjb"/><circle class="swsab_86e"/><path class="cxwprnb1j"/></g>`,
		"fallback": "lucide-lab:scissors-hair-comb",
	});
}

export default Component;
