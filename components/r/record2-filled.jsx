import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm4a5uuyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm4a5uuyd"/>`,
		"fallback": "reicon:record2-filled",
	});
}

export default Component;
