import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht_47xbnf.css';
import '../../css/l/l6a3o_b7p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht_47xbnf"/><path class="l6a3o_b7p"/>`,
		"fallback": "energy-icons:temperature-20-bold",
	});
}

export default Component;
