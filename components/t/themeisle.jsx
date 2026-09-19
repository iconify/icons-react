import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if3aotbfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if3aotbfg"/>`,
		"fallback": "fa-brands:themeisle",
	});
}

export default Component;
