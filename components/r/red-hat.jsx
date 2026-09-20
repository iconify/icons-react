import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0x3uhbzd.css';
import '../../css/l/lo8henb7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0x3uhbzd"/><path class="lo8henb7b"/>`,
		"fallback": "selfhst:red-hat",
	});
}

export default Component;
