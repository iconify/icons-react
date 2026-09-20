import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn56tt2qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn56tt2qg"/>`,
		"fallback": "mdi-light:monitor-multiple",
	});
}

export default Component;
