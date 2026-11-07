import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql-1g5bil.css';
import '../../css/w/we5rc8m_b.css';
import '../../css/i/igcg0ebrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql-1g5bil"/><path class="we5rc8m_b"/><path class="igcg0ebrk"/>`,
		"fallback": "solar:loader-bold-duotone",
	});
}

export default Component;
