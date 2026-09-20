import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg4rw_iiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg4rw_iiw"/>`,
		"fallback": "thesvg-color:nxp",
	});
}

export default Component;
