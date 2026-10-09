import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqzirr-9x.css';
import '../../css/y/y8ad7wc8w.css';
import '../../css/r/rub25_bgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqzirr-9x"/><path class="y8ad7wc8w"/><path class="rub25_bgh"/>`,
		"fallback": "energy-icons:salt-cavern-48-bold",
	});
}

export default Component;
