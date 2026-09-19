import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl4m8djlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl4m8djlv"/>`,
		"fallback": "grommet-icons:user-add",
	});
}

export default Component;
