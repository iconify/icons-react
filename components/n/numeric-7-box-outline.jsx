import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s00hep_zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s00hep_zc"/>`,
		"fallback": "mdi:numeric-7-box-outline",
	});
}

export default Component;
