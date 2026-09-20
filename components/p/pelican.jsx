import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyoei_wsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyoei_wsp"/>`,
		"fallback": "thesvg-color:pelican",
	});
}

export default Component;
