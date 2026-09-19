import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxpr3ub_o.css';
import '../../css/y/y8q0_obwr.css';
import '../../css/u/ub3xs8bzt.css';
import '../../css/o/o3gn41opk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxpr3ub_o"/><path class="y8q0_obwr"/><path class="ub3xs8bzt"/><path class="o3gn41opk"/>`,
		"fallback": "bitcoin-icons:send-limit-filled",
	});
}

export default Component;
