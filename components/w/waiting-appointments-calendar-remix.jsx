import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb1za1b7d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kb1za1b7d"/>`,
		"fallback": "streamline:waiting-appointments-calendar-remix",
	});
}

export default Component;
