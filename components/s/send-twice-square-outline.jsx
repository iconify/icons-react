import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq6c8dbwk.css';
import '../../css/p/pfp9-dnkq.css';
import '../../css/o/o2vee8t7p.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq6c8dbwk"/><path class="pfp9-dnkq"/><path class="o2vee8t7p"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:send-twice-square-outline",
	});
}

export default Component;
