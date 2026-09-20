import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq4vz-hqs.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq4vz-hqs"/>`,
		"fallback": "map:rafting",
	});
}

export default Component;
