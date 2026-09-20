import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-gr9vbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-gr9vbzu"/>`,
		"fallback": "streamline-ultimate:synchronize-arrows-three-bold",
	});
}

export default Component;
