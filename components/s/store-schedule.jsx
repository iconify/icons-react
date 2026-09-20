import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2v-gtbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2v-gtbqb"/>`,
		"fallback": "mdi:store-schedule",
	});
}

export default Component;
