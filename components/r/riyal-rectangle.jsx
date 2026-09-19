import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/udvujtm1n.css';
import '../../css/u/uood5i57a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="udvujtm1n"/><path class="uood5i57a"/></g>`,
		"fallback": "hugeicons:riyal-rectangle",
	});
}

export default Component;
