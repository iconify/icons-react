import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hob83lbft.css';
import '../../css/l/lhdxw8u5p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hob83lbft"/><path class="lhdxw8u5p"/>`,
		"fallback": "energy-icons:tablet-20",
	});
}

export default Component;
