import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pchbanb-p.css';
import '../../css/c/cjt-mmb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pchbanb-p"/><path class="cjt-mmb4n"/></g>`,
		"fallback": "hugeicons:jsx-03",
	});
}

export default Component;
