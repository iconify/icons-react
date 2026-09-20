import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewj6xcc-r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ewj6xcc-r"/>`,
		"fallback": "streamline-flex:school-remix",
	});
}

export default Component;
