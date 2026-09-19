import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2f_gjbjf.css';
import '../../css/i/ikg83ac8f.css';
import '../../css/f/fvmh2ibcr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2f_gjbjf"/><path class="ikg83ac8f"/><path class="fvmh2ibcr"/>`,
		"fallback": "carbon:rule-test",
	});
}

export default Component;
