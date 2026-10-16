import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqcchmb8c.css';
import '../../css/y/ymqda_bxj.css';
import '../../css/b/bufykz6nv.css';
import '../../css/z/zgtxh_b8y.css';
import '../../css/o/o-b6_hbnr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqcchmb8c"/><path class="ymqda_bxj"/><path class="bufykz6nv"/><path class="zgtxh_b8y"/><path class="o-b6_hbnr"/>`,
		"fallback": "energy-icons:tree-planting-20-bold",
	});
}

export default Component;
