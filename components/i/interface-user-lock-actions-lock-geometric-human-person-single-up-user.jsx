import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/g/gw-j2db2s.css';
import '../../css/i/iivwb5bdc.css';
import '../../css/o/o8t9xzbxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="gdjy5jlqy"/><path class="gw-j2db2s"/><rect class="iivwb5bdc"/><path class="o8t9xzbxm"/></g>`,
		"fallback": "streamline:interface-user-lock-actions-lock-geometric-human-person-single-up-user",
	});
}

export default Component;
