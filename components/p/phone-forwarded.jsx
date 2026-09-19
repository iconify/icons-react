import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b13lxxb-j.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b13lxxb-j"/>`,
		"fallback": "zmdi:phone-forwarded",
	});
}

export default Component;
