import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzt2iu9dp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzt2iu9dp"/>`,
		"fallback": "sidekickicons:pill",
	});
}

export default Component;
