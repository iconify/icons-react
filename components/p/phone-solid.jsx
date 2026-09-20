import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib276704k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib276704k"/>`,
		"fallback": "streamline-plump:phone-solid",
	});
}

export default Component;
