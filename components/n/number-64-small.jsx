import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2y77wbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2y77wbtv"/>`,
		"fallback": "tabler:number-64-small",
	});
}

export default Component;
