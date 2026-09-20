import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdhi3-bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdhi3-bsn"/>`,
		"fallback": "thesvg-color:vmware",
	});
}

export default Component;
