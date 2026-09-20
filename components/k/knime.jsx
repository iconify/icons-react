import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so21iw-ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so21iw-ah"/>`,
		"fallback": "thesvg-color:knime",
	});
}

export default Component;
