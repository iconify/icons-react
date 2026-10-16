import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8w4i5ywu.css';
import '../../css/f/fy5v8duia.css';
import '../../css/a/a-8czfekn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8w4i5ywu"/><path class="fy5v8duia"/><path class="a-8czfekn"/>`,
		"fallback": "energy-icons:spot-price-48",
	});
}

export default Component;
