import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5wkahb5o.css';
import '../../css/i/ibdum26cr.css';
import '../../css/w/wc-vucb_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="s5wkahb5o"/><path clip-rule="evenodd" class="ibdum26cr"/><path clip-rule="evenodd" class="wc-vucb_t"/>`,
		"fallback": "selfhst:pinepods",
	});
}

export default Component;
