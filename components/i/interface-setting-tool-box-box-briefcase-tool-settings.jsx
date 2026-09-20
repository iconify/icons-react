import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/um0lzl02u.css';
import '../../css/a/a_4rubcxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="um0lzl02u"/><path class="a_4rubcxu"/></g>`,
		"fallback": "streamline:interface-setting-tool-box-box-briefcase-tool-settings",
	});
}

export default Component;
