import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyy421bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyy421bgs"/>`,
		"fallback": "noviair-light:package-x",
	});
}

export default Component;
