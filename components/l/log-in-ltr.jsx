import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh-fv613y.css';
import '../../css/l/leg-f-qxq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh-fv613y"/><path class="leg-f-qxq"/>`,
		"fallback": "ooui:log-in-ltr",
	});
}

export default Component;
