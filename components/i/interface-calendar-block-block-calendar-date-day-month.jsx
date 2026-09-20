import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gq5mk-mss.css';
import '../../css/h/hlh-qiscw.css';
import '../../css/g/gh8j0lb6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gq5mk-mss"/><circle class="hlh-qiscw"/><path class="gh8j0lb6n"/></g>`,
		"fallback": "streamline:interface-calendar-block-block-calendar-date-day-month",
	});
}

export default Component;
