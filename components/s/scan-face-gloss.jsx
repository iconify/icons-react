import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpsbh7brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpsbh7brm"/>`,
		"fallback": "withicons:scan-face-gloss",
	});
}

export default Component;
