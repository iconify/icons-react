import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaqdor5_y.css';
import '../../css/i/i9270-aoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iaqdor5_y"/><path class="i9270-aoh"/>`,
		"fallback": "lets-icons:temperature-duotone",
	});
}

export default Component;
