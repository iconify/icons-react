import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/z/zxx5oi.css';
import '../../css/t/trkq7y.css';
import '../../css/w/wu6yao.css';
import '../../css/f/f7aalh.css';
import '../../css/s/so-from-62.css';
import '../../css/d/d-1oz9bx.css';
import '../../css/d/d-fpnoxl.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-32.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c zxx5oi"/><path class="trkq7y"/><path class="a0m25c wu6yao"/><path class="a0m25c f7aalh"/>`,
		"fallback": "line-md:monitor-mutlple",
	});
}

export default Component;
