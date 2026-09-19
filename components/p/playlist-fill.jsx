import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0_jmwy_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g0_jmwy_y"/>`,
		"fallback": "iconamoon:playlist-fill",
	});
}

export default Component;
