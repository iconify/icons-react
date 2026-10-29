import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttlb7qd0z.css';
import '../../css/y/yv7txbcoh.css';
import '../../css/e/em-wv-bhi.css';
import '../../css/i/i19h-pb3t.css';
import '../../css/j/jl-m0qo7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttlb7qd0z"/><path class="yv7txbcoh"/><path class="em-wv-bhi"/><path class="i19h-pb3t"/><path class="jl-m0qo7l"/>`,
		"fallback": "withicons-bauhaus:stethoscope",
	});
}

export default Component;
