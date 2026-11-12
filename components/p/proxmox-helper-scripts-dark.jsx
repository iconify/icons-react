import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wurwjtrbr.css';
import '../../css/a/a76ci7s7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wurwjtrbr"/><path class="a76ci7s7o"/>`,
		"fallback": "selfhst:proxmox-helper-scripts-dark",
	});
}

export default Component;
