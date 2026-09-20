import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o51_o-bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o51_o-bsd"/>`,
		"fallback": "reicon:path2-filled",
	});
}

export default Component;
