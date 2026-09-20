import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_7g23j3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_7g23j3d"/>`,
		"fallback": "ri:progress-8-fill",
	});
}

export default Component;
