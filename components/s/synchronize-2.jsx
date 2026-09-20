import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zg630-62p.css';
import '../../css/k/kx8zs0b1b.css';
import '../../css/z/z6ty3wb7k.css';
import '../../css/z/zl816xbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zg630-62p"/><path class="kx8zs0b1b"/><path class="z6ty3wb7k"/><path class="zl816xbzr"/></g>`,
		"fallback": "streamline-cyber-color:synchronize-2",
	});
}

export default Component;
