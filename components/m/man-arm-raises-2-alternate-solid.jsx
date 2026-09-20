import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuxxqtb6o.css';
import '../../css/a/a2fz70btr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuxxqtb6o"/><path class="a2fz70btr"/>`,
		"fallback": "streamline-plump:man-arm-raises-2-alternate-solid",
	});
}

export default Component;
