import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxjbxrbuy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nxjbxrbuy"/>`,
		"fallback": "ix:tag-circle-arrow-down-filled",
	});
}

export default Component;
