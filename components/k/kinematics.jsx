import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irwj-e5bp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="irwj-e5bp"/>`,
		"fallback": "ix:kinematics",
	});
}

export default Component;
