import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt6n36bom.css';
import '../../css/i/i5jbbacbv.css';
import '../../css/e/egl9w0p1j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt6n36bom"/><path class="i5jbbacbv"/><path class="egl9w0p1j"/>`,
		"fallback": "energy-icons:price-up-20-bold",
	});
}

export default Component;
