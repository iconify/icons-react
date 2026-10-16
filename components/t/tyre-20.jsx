import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/l/l5cqi8bbb.css';
import '../../css/s/sz2puvbik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="l5cqi8bbb"/><path class="sz2puvbik"/>`,
		"fallback": "energy-icons:tyre-20",
	});
}

export default Component;
