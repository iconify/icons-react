import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usy2kj38d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="usy2kj38d"/>`,
		"fallback": "reicon:search2",
	});
}

export default Component;
