import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/s/ssaqwk.css';
import '../../css/n/na274t.css';
import '../../css/j/jip9fo.css';
import '../../css/p/p91oqf.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ssaqwk"/><path class="a0m25c na274t"/><path class="a0m25c jip9fo"/><path class="a0m25c p91oqf"/>`,
		"fallback": "line-md:menu-fold-right",
	});
}

export default Component;
