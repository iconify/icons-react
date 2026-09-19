import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-rjfpb9o.css';
import '../../css/x/xyso4-t-l.css';

const viewBox = {"width":26,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-rjfpb9o"/><path class="xyso4-t-l"/>`,
		"fallback": "fontisto:swarm",
	});
}

export default Component;
