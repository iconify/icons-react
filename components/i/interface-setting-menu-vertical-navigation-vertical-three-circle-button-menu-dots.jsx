import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pu7xdrmve.css';
import '../../css/o/o5grrub_r.css';
import '../../css/z/zviecfb4g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="pu7xdrmve"/><circle class="o5grrub_r"/><circle class="zviecfb4g"/></g>`,
		"fallback": "streamline:interface-setting-menu-vertical-navigation-vertical-three-circle-button-menu-dots",
	});
}

export default Component;
