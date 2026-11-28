import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm2mmtbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm2mmtbjj"/>`,
		"fallback": "noviair:notebook",
	});
}

export default Component;
