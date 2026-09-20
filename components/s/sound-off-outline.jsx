import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrmf9g2zn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrmf9g2zn"/>`,
		"fallback": "teenyicons:sound-off-outline",
	});
}

export default Component;
