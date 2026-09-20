import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_cut2bia.css';
import '../../css/v/vyoe27bvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o_cut2bia"/><path class="vyoe27bvu"/>`,
		"fallback": "selfhst:north-pole-security",
	});
}

export default Component;
