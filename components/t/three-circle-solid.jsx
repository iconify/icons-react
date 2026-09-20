import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovf2g8dss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovf2g8dss"/>`,
		"fallback": "mynaui:three-circle-solid",
	});
}

export default Component;
