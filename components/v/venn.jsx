import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kffapt02h.css';
import '../../css/v/v99dws5gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="kffapt02h"/><circle class="v99dws5gv"/></g>`,
		"fallback": "lucide-lab:venn",
	});
}

export default Component;
