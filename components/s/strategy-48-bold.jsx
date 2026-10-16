import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4lx5fghu.css';
import '../../css/d/d3p8osbna.css';
import '../../css/d/dxicmz50x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4lx5fghu"/><path class="d3p8osbna"/><path class="dxicmz50x"/>`,
		"fallback": "energy-icons:strategy-48-bold",
	});
}

export default Component;
