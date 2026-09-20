import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wmk7tacbz.css';
import '../../css/a/af_ob0asn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="wmk7tacbz"/><path class="af_ob0asn"/></g>`,
		"fallback": "streamline:interface-edit-bomb-delete-bomb-remove",
	});
}

export default Component;
