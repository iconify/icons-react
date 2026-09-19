import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtsoh-dhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtsoh-dhl"/>`,
		"fallback": "boxicons:moon-crater-filled",
	});
}

export default Component;
