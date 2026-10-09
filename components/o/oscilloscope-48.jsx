import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuvdc2bma.css';
import '../../css/w/ww4ol3fvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuvdc2bma"/><path class="ww4ol3fvu"/>`,
		"fallback": "energy-icons:oscilloscope-48",
	});
}

export default Component;
