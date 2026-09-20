import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdofg1bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdofg1bvj"/>`,
		"fallback": "tabler:number-93-small",
	});
}

export default Component;
