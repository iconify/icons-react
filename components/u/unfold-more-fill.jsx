import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv4eu2o7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vv4eu2o7d"/>`,
		"fallback": "si:unfold-more-fill",
	});
}

export default Component;
