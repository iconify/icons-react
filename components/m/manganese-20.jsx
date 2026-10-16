import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytc7x632j.css';
import '../../css/z/z47-jtbzb.css';
import '../../css/r/rgy_abbok.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytc7x632j"/><path class="z47-jtbzb"/><path class="rgy_abbok"/>`,
		"fallback": "energy-icons:manganese-20",
	});
}

export default Component;
