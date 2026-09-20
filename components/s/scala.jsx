import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxs9r3b1f.css';
import '../../css/r/rige9ccms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxs9r3b1f"/><path class="rige9ccms"/>`,
		"fallback": "material-icon-theme:scala",
	});
}

export default Component;
