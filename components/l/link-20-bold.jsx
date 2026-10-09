import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aghwx5bsq.css';
import '../../css/t/tel8tmb8b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aghwx5bsq"/><path class="tel8tmb8b"/>`,
		"fallback": "energy-icons:link-20-bold",
	});
}

export default Component;
