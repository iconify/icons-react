import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvwf3uisn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvwf3uisn"/>`,
		"fallback": "grommet-icons:tag",
	});
}

export default Component;
