import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nellz_brh.css';
import '../../css/o/oubl2pb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nellz_brh"/><path class="oubl2pb5a"/>`,
		"fallback": "streamline-ultimate:time-clock-hand-1-bold",
	});
}

export default Component;
