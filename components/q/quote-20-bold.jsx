import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emv79z_7s.css';
import '../../css/u/uedxr2vmg.css';
import '../../css/b/b4j8a-5qc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emv79z_7s"/><path class="uedxr2vmg"/><path class="b4j8a-5qc"/>`,
		"fallback": "energy-icons:quote-20-bold",
	});
}

export default Component;
