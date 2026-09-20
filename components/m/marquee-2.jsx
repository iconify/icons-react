import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv-4i2bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv-4i2bqi"/>`,
		"fallback": "tabler:marquee-2",
	});
}

export default Component;
