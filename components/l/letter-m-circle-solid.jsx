import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwtip4izv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwtip4izv"/>`,
		"fallback": "mynaui:letter-m-circle-solid",
	});
}

export default Component;
