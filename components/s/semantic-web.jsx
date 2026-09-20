import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psa7iq0_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psa7iq0_v"/>`,
		"fallback": "thesvg-color:semantic-web",
	});
}

export default Component;
