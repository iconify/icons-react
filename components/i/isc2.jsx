import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avt6vcbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avt6vcbxz"/>`,
		"fallback": "simple-icons:isc2",
	});
}

export default Component;
