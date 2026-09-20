import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fqj2pkbin.css';
import '../../css/d/d7flvxayo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fqj2pkbin"/><path class="d7flvxayo"/></g>`,
		"fallback": "tabler:mood-sick",
	});
}

export default Component;
