import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cixcpjbxu.css';
import '../../css/m/mr5bnpbbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cixcpjbxu"/><path class="mr5bnpbbp"/>`,
		"fallback": "selfhst:wallos",
	});
}

export default Component;
