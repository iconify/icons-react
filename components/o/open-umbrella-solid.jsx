import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqkg-ujyr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iqkg-ujyr"/>`,
		"fallback": "streamline-flex:open-umbrella-solid",
	});
}

export default Component;
