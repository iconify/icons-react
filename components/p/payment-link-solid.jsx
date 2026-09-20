import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msm96vi3m.css';
import '../../css/h/hstvx30-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msm96vi3m"/><path class="hstvx30-v"/>`,
		"fallback": "stash:payment-link-solid",
	});
}

export default Component;
