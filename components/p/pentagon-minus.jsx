import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5c2ixb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5c2ixb1v"/>`,
		"fallback": "tabler:pentagon-minus",
	});
}

export default Component;
