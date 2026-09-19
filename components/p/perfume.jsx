import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8gsc8b7m.css';
import '../../css/k/kh73hfm6v.css';
import '../../css/b/btovx6blc.css';
import '../../css/b/bqj0ijarp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="o8gsc8b7m"/><rect class="kh73hfm6v"/><path class="btovx6blc"/><path class="bqj0ijarp"/></g>`,
		"fallback": "icon-park-outline:perfume",
	});
}

export default Component;
