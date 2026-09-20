import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djf01d-5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="djf01d-5i"/>`,
		"fallback": "stash:link-solid",
	});
}

export default Component;
