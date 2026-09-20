import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0xak7bzd.css';
import '../../css/v/vqpagmb7q.css';
import '../../css/g/gzmbm5zua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect vector-effect="non-scaling-stroke" class="i0xak7bzd"/><rect vector-effect="non-scaling-stroke" class="vqpagmb7q"/><rect vector-effect="non-scaling-stroke" class="gzmbm5zua"/></g>`,
		"fallback": "wordpress:sites",
	});
}

export default Component;
