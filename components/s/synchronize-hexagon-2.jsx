import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zg630-62p.css';
import '../../css/k/kx8zs0b1b.css';
import '../../css/s/s4o9yxbxi.css';
import '../../css/i/iipt34dbe.css';
import '../../css/v/ve8g80bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zg630-62p"/><path class="kx8zs0b1b"/><path class="s4o9yxbxi"/><path class="iipt34dbe"/><path class="ve8g80bcu"/></g>`,
		"fallback": "streamline-cyber-color:synchronize-hexagon-2",
	});
}

export default Component;
