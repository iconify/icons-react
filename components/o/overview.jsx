import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9mi2jqis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9mi2jqis"/>`,
		"fallback": "grommet-icons:overview",
	});
}

export default Component;
