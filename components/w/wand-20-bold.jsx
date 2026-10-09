import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5gnfjbdr.css';
import '../../css/l/lj6h3gwfe.css';
import '../../css/c/c1mb_dbpr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5gnfjbdr"/><path class="lj6h3gwfe"/><path class="c1mb_dbpr"/>`,
		"fallback": "energy-icons:wand-20-bold",
	});
}

export default Component;
