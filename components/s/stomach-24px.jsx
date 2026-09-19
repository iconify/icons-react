import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r55xrs0iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r55xrs0iz"/>`,
		"fallback": "healthicons:stomach-24px",
	});
}

export default Component;
