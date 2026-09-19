import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hicz8ocee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hicz8ocee"/>`,
		"fallback": "hugeicons:signal-no-01",
	});
}

export default Component;
