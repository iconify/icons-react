import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxkm8abvd.css';
import '../../css/q/qks1qac5c.css';
import '../../css/s/s0wk9pbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxkm8abvd"/><path class="qks1qac5c"/><path class="s0wk9pbhz"/>`,
		"fallback": "streamline-ultimate:truck-empty-1-bold",
	});
}

export default Component;
