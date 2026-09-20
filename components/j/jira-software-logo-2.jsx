import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vn11e3bus.css';
import '../../css/b/b1_p6excr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vn11e3bus"/><path class="b1_p6excr"/></g>`,
		"fallback": "streamline-logos:jira-software-logo-2",
	});
}

export default Component;
