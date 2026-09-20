import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kt5wyebru.css';
import '../../css/g/gnx2n8d3e.css';
import '../../css/g/gio48fbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kt5wyebru"/><path class="gnx2n8d3e"/><path class="gio48fbub"/></g>`,
		"fallback": "lucide-lab:unicorn-head",
	});
}

export default Component;
