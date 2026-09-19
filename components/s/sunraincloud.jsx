import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk6vu-bip.css';
import '../../css/i/i_urbac4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vk6vu-bip"/><path class="i_urbac4g"/>`,
		"fallback": "fxemoji:sunraincloud",
	});
}

export default Component;
