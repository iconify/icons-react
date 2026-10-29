import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv2ndra2q.css';
import '../../css/m/mgbb3achs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv2ndra2q"/><path class="mgbb3achs wm-deco"/>`,
		"fallback": "withicons-bauhaus:moon",
	});
}

export default Component;
