import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be5dz-b2u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="be5dz-b2u"/>`,
		"fallback": "streamline-flex:navigation-arrow-north-solid",
	});
}

export default Component;
