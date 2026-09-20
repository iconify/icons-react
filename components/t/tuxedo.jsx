import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kj-r5k7qc.css';
import '../../css/a/ajkh98hml.css';
import '../../css/x/xkop7psru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kj-r5k7qc"/><path class="ajkh98hml"/><path class="xkop7psru"/></g>`,
		"fallback": "lucide-lab:tuxedo",
	});
}

export default Component;
