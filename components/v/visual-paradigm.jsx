import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv3iph2kk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv3iph2kk"/>`,
		"fallback": "thesvg-color:visual-paradigm",
	});
}

export default Component;
