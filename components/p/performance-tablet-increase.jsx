import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3cpah65y.css';
import '../../css/t/t0v_vkbga.css';
import '../../css/w/w-kt0j9lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t3cpah65y"/><path class="t0v_vkbga"/><path class="w-kt0j9lf"/></g>`,
		"fallback": "streamline-ultimate:performance-tablet-increase",
	});
}

export default Component;
