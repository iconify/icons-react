import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngda-7gsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngda-7gsf"/>`,
		"fallback": "thesvg-color:keep-a-changelog",
	});
}

export default Component;
