import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmjt_wemd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmjt_wemd"/>`,
		"fallback": "uil:life-ring",
	});
}

export default Component;
