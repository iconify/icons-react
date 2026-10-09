import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqqbf4jvf.css';
import '../../css/f/flpc-e6db.css';
import '../../css/e/e6txgee1e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqqbf4jvf"/><path class="flpc-e6db"/><path class="e6txgee1e"/>`,
		"fallback": "energy-icons:rowing-20-bold",
	});
}

export default Component;
