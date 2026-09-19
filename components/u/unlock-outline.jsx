import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oae8n8nad.css';
import '../../css/z/z7exg-pia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="unlock-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="oae8n8nad"/><path class="z7exg-pia"/></g></g>`,
		"fallback": "cuida:unlock-outline",
	});
}

export default Component;
