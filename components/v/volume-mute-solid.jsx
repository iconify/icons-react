import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7bs3sb4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v7bs3sb4e"/>`,
		"fallback": "streamline-flex:volume-mute-solid",
	});
}

export default Component;
