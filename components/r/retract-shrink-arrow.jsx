import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjh4w04bl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjh4w04bl"/>`,
		"fallback": "streamline-freehand:retract-shrink-arrow",
	});
}

export default Component;
