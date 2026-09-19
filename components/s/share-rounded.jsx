import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efr8e-b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efr8e-b8i"/>`,
		"fallback": "grommet-icons:share-rounded",
	});
}

export default Component;
