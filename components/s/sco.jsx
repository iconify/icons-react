import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbsdbcc6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbsdbcc6u"/>`,
		"fallback": "grommet-icons:sco",
	});
}

export default Component;
