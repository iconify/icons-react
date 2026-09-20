import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjixijb4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjixijb4m"/>`,
		"fallback": "ix:radio-waves-off",
	});
}

export default Component;
