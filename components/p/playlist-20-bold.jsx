import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aav7v0ikn.css';
import '../../css/q/q590whb4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aav7v0ikn"/><path class="q590whb4l"/>`,
		"fallback": "energy-icons:playlist-20-bold",
	});
}

export default Component;
