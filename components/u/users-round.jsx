import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z08-9pbuq.css';
import '../../css/z/z3cyn9bdw.css';
import '../../css/s/st6veybqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z08-9pbuq"/><path class="z3cyn9bdw"/><path class="st6veybqt"/></g>`,
		"fallback": "hugeicons:users-round",
	});
}

export default Component;
