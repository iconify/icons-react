import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9drbtbgy.css';
import '../../css/l/lgzyerhxp.css';
import '../../css/c/c8z83bd8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k9drbtbgy"/><path class="lgzyerhxp"/><path class="c8z83bd8p"/></g>`,
		"fallback": "hugeicons:message-user-02",
	});
}

export default Component;
