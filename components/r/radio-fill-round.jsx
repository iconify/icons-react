import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh9n6fbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh9n6fbwp"/>`,
		"fallback": "coolicons:radio-fill-round",
	});
}

export default Component;
