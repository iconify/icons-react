import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oykyqvv2a.css';
import '../../css/p/p9sas3rig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oykyqvv2a"/><rect class="p9sas3rig"/></g>`,
		"fallback": "lucide:tv",
	});
}

export default Component;
