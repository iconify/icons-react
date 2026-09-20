import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c64022b1f.css';
import '../../css/g/g2rcx6i-o.css';
import '../../css/i/i5vl1gfpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c64022b1f"/><rect class="g2rcx6i-o"/><path class="i5vl1gfpx"/>`,
		"fallback": "uim:vector-square-alt",
	});
}

export default Component;
