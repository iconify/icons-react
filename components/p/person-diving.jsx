import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioxi_abwr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioxi_abwr"/>`,
		"fallback": "pinhead:person-diving",
	});
}

export default Component;
