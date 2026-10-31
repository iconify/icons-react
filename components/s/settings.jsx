import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t2-beacby.css';
import '../../css/r/rys2yo74m.css';
import '../../css/i/is1jxbb4b.css';
import '../../css/n/ndsrwmbkq.css';
import '../../css/v/v625o3kys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="t2-beacby wm-shadow"/><path class="rys2yo74m wm-shadow"/><path class="is1jxbb4b"/><path class="ndsrwmbkq"/><path class="v625o3kys"/></g>`,
		"fallback": "withicons-brutal:settings",
	});
}

export default Component;
