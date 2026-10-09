import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy7xqk_um.css';
import '../../css/e/eqkb3ybpr.css';
import '../../css/l/l-z5_5bfo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy7xqk_um"/><path class="eqkb3ybpr"/><path class="l-z5_5bfo"/>`,
		"fallback": "energy-icons:layout-48-bold",
	});
}

export default Component;
