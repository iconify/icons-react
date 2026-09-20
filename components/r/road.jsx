import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk7-0nbwz.css';
import '../../css/l/lyrbudsuh.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk7-0nbwz"/><path class="lyrbudsuh"/>`,
		"fallback": "lineicons:road",
	});
}

export default Component;
