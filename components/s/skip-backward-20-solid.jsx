import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3dxg33um.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3dxg33um"/>`,
		"fallback": "sidekickicons:skip-backward-20-solid",
	});
}

export default Component;
