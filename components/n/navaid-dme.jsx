import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-u4xnbot.css';
import '../../css/o/oa5_b0b8m.css';
import '../../css/z/zq-0s9biw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-u4xnbot"/><path class="oa5_b0b8m"/><path class="zq-0s9biw"/>`,
		"fallback": "carbon:navaid-dme",
	});
}

export default Component;
