import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz34yrbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nz34yrbuv"/>`,
		"fallback": "reicon:projector",
	});
}

export default Component;
