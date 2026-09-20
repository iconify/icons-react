import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/g/g5pb60rja.css';
import '../../css/u/u7db4chhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="g5pb60rja"/><path class="u7db4chhd"/></g>`,
		"fallback": "streamline-ultimate:office-building-tall-2",
	});
}

export default Component;
