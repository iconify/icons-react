import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgb52ccwa.css';
import '../../css/x/x0mhp8bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgb52ccwa"/><path class="x0mhp8bgd"/></g>`,
		"fallback": "streamline-sharp-color:medical-folder-flat",
	});
}

export default Component;
