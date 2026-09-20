import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqeqdgb_b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqeqdgb_b"/>`,
		"fallback": "streamline:wave-signal",
	});
}

export default Component;
