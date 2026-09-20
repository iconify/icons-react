import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auh_ykphj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auh_ykphj"/>`,
		"fallback": "mdi:vuetify",
	});
}

export default Component;
