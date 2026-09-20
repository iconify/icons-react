import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk989y3dj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jk989y3dj"/>`,
		"fallback": "streamline-plump:smoking-area-remix",
	});
}

export default Component;
