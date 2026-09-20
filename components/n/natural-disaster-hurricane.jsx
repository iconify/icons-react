import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lbdq4fm5a.css';
import '../../css/o/ocolrmbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lbdq4fm5a"/><path class="ocolrmbek"/></g>`,
		"fallback": "streamline-ultimate:natural-disaster-hurricane",
	});
}

export default Component;
