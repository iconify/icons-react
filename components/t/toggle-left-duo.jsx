import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivtwj9k1u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t7kmbybpb.css';
import '../../css/e/er_ijhjpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivtwj9k1u secondary"/><g class="dt0cm9dhy primary"><path class="t7kmbybpb"/><path class="er_ijhjpg"/></g>`,
		"fallback": "iconaut:toggle-left-duo",
	});
}

export default Component;
