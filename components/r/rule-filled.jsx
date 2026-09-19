import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elqse40db.css';
import '../../css/h/hkk3_ybhv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elqse40db"/><path class="hkk3_ybhv"/>`,
		"fallback": "carbon:rule-filled",
	});
}

export default Component;
