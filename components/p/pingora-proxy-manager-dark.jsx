import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbdto3ogj.css';
import '../../css/q/q8sv92b_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbdto3ogj"/><path class="q8sv92b_b"/>`,
		"fallback": "selfhst:pingora-proxy-manager-dark",
	});
}

export default Component;
