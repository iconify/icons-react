import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq6wnx2rd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq6wnx2rd"/>`,
		"fallback": "iconaut:package-plus-solid",
	});
}

export default Component;
