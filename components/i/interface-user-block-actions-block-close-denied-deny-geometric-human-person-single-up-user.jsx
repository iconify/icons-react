import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/x/xishbgben.css';
import '../../css/k/kun76w_jo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="gdjy5jlqy"/><circle class="xishbgben"/><path class="kun76w_jo"/></g>`,
		"fallback": "streamline:interface-user-block-actions-block-close-denied-deny-geometric-human-person-single-up-user",
	});
}

export default Component;
