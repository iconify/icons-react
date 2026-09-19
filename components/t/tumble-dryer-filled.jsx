import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu91qdbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iu91qdbbw"/>`,
		"fallback": "griddy-icons:tumble-dryer-filled",
	});
}

export default Component;
