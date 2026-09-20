import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha14l_bcm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ha14l_bcm"/>`,
		"fallback": "streamline-flex:thermometer-remix",
	});
}

export default Component;
