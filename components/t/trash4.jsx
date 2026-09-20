import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns9ftsbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns9ftsbdx"/>`,
		"fallback": "reicon:trash4",
	});
}

export default Component;
