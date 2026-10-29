import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj18p3v6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj18p3v6u"/>`,
		"fallback": "withicons:more-horizontal-solid",
	});
}

export default Component;
