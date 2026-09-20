import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbez5bb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbez5bb6g"/>`,
		"fallback": "streamline-sharp:laptop-camera-remix",
	});
}

export default Component;
