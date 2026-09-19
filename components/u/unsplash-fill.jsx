import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhi-8zbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dhi-8zbfn"/>`,
		"fallback": "akar-icons:unsplash-fill",
	});
}

export default Component;
