import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjdl12cwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjdl12cwn"/>`,
		"fallback": "noviair:mouse-x",
	});
}

export default Component;
