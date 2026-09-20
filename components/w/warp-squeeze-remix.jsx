import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0txx1bwq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0txx1bwq"/>`,
		"fallback": "streamline-plump:warp-squeeze-remix",
	});
}

export default Component;
