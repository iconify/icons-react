import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-oc9-2ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-oc9-2ju"/>`,
		"fallback": "tabler:tornado",
	});
}

export default Component;
