import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvyskiz7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvyskiz7v"/>`,
		"fallback": "streamline-sharp:traffic-light-solid",
	});
}

export default Component;
