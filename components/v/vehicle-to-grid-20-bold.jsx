import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxklois4m.css';
import '../../css/t/t_7rprl1m.css';
import '../../css/u/ufn12ktbs.css';
import '../../css/u/uale--bkz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxklois4m"/><path class="t_7rprl1m"/><path class="ufn12ktbs"/><path class="uale--bkz"/>`,
		"fallback": "energy-icons:vehicle-to-grid-20-bold",
	});
}

export default Component;
