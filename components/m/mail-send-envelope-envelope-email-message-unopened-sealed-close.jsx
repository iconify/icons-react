import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c975v6b7u.css';
import '../../css/o/ov7637cjy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="c975v6b7u"/><path class="ov7637cjy"/></g>`,
		"fallback": "streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close",
	});
}

export default Component;
