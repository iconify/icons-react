import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxj2tvb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxj2tvb8n"/>`,
		"fallback": "stash:sliders-v-light",
	});
}

export default Component;
