import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usmd_2bpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usmd_2bpb"/>`,
		"fallback": "selfhst:openmediavault-dark",
	});
}

export default Component;
