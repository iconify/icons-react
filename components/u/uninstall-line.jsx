import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk9tf_p6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk9tf_p6e"/>`,
		"fallback": "ri:uninstall-line",
	});
}

export default Component;
