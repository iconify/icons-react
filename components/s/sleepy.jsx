import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzwd2419d.css';
import '../../css/m/m5myy5blm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzwd2419d"/><path class="m5myy5blm"/>`,
		"fallback": "icomoon-free:sleepy",
	});
}

export default Component;
