import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s13fpy2sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s13fpy2sn"/>`,
		"fallback": "mage:telegram",
	});
}

export default Component;
