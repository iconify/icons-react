import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb8udxb0c.css';
import '../../css/g/gxpq89blg.css';
import '../../css/m/mse88bcix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vb8udxb0c"/><path clip-rule="evenodd" class="gxpq89blg"/><path class="mse88bcix"/>`,
		"fallback": "streamline-freehand:programming-flowchart",
	});
}

export default Component;
