import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky022pehc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ky022pehc"/>`,
		"fallback": "streamline-sharp-color:select-circle-area-2-flat",
	});
}

export default Component;
