import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk1ec_hjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk1ec_hjm"/>`,
		"fallback": "sidekickicons:outdent-solid",
	});
}

export default Component;
