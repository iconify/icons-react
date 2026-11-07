import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m03pku77p.css';
import '../../css/q/q7wq8kbpw.css';
import '../../css/m/mwt4lvgkq.css';
import '../../css/o/o_sbwqbmg.css';
import '../../css/i/i0_yjzb_q.css';
import '../../css/y/ych6edw5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m03pku77p"/><path class="q7wq8kbpw"/><path class="mwt4lvgkq"/><path class="o_sbwqbmg"/><path class="i0_yjzb_q"/><path class="ych6edw5l"/>`,
		"fallback": "solar:tuning-2-bold",
	});
}

export default Component;
