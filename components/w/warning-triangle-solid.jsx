import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba6a_pbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ba6a_pbed"/>`,
		"fallback": "iconoir:warning-triangle-solid",
	});
}

export default Component;
