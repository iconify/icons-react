import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hhov-gbog.css';
import '../../css/o/o5grrub_r.css';
import '../../css/r/rvurs1tbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="hhov-gbog"/><circle class="o5grrub_r"/><circle class="rvurs1tbw"/></g>`,
		"fallback": "streamline:interface-setting-menu-horizontal-navigation-dots-three-circle-button-horizontal-menu",
	});
}

export default Component;
