import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muxnjybnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muxnjybnj"/>`,
		"fallback": "icon-park-solid:pin",
	});
}

export default Component;
