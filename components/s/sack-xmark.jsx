import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/busg1jzlv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="busg1jzlv"/>`,
		"fallback": "fa6-solid:sack-xmark",
	});
}

export default Component;
