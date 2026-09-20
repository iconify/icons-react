import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_7fzobku.css';
import '../../css/g/gw9s8899s.css';
import '../../css/t/t616afbxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="l_7fzobku"/><circle class="gw9s8899s"/><circle class="t616afbxn"/>`,
		"fallback": "selfhst:smlight-light",
	});
}

export default Component;
