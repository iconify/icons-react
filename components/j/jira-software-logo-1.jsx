import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/syxeud17m.css';
import '../../css/b/b-6lcy7tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="syxeud17m"/><path class="b-6lcy7tw"/></g>`,
		"fallback": "streamline-logos:jira-software-logo-1",
	});
}

export default Component;
