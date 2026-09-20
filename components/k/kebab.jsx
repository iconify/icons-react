import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/znn90lbbf.css';
import '../../css/k/kgf_febrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="znn90lbbf"/><path class="kgf_febrc"/></g>`,
		"fallback": "lucide-lab:kebab",
	});
}

export default Component;
