import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwga7p4ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwga7p4ik"/>`,
		"fallback": "solar:stethoscope-bold",
	});
}

export default Component;
