import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sybtc-v9e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sybtc-v9e"/>`,
		"fallback": "streamline:synchronize-warning-solid",
	});
}

export default Component;
