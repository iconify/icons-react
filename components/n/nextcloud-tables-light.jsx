import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2a7lnupb.css';
import '../../css/i/igo6zo3_s.css';
import '../../css/s/s36agfsxj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2a7lnupb"/><path clip-rule="evenodd" class="igo6zo3_s"/><path clip-rule="evenodd" class="s36agfsxj"/>`,
		"fallback": "selfhst:nextcloud-tables-light",
	});
}

export default Component;
