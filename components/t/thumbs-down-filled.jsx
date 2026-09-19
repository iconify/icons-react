import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb24y8btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pb24y8btw"/>`,
		"fallback": "griddy-icons:thumbs-down-filled",
	});
}

export default Component;
