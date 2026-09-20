import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt8ssdtat.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qt8ssdtat"/>`,
		"fallback": "streamline-flex:watch-circle-charging-solid",
	});
}

export default Component;
