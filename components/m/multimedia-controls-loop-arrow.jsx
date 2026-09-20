import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euz42-bsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="euz42-bsu"/>`,
		"fallback": "streamline-freehand:multimedia-controls-loop-arrow",
	});
}

export default Component;
