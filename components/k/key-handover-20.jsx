import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwaplabmu.css';
import '../../css/o/o-xjgxbux.css';
import '../../css/y/yl2ujob7n.css';
import '../../css/z/z65fwkbap.css';
import '../../css/d/djjvp7y2z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwaplabmu"/><path class="o-xjgxbux"/><path class="yl2ujob7n"/><path class="z65fwkbap"/><path class="djjvp7y2z"/>`,
		"fallback": "energy-icons:key-handover-20",
	});
}

export default Component;
