import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjnlq7v4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjnlq7v4i"/>`,
		"fallback": "gcp:tensorflow-enterprise",
	});
}

export default Component;
