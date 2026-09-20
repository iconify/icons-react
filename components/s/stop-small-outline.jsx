import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypa3vvtnc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypa3vvtnc"/>`,
		"fallback": "teenyicons:stop-small-outline",
	});
}

export default Component;
