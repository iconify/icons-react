import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxsoire1d.css';
import '../../css/j/jy-i8_pkz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxsoire1d"/><path class="jy-i8_pkz"/>`,
		"fallback": "energy-icons:link-48-bold",
	});
}

export default Component;
