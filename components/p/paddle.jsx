import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxwfs3h9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxwfs3h9s"/>`,
		"fallback": "lineicons:paddle",
	});
}

export default Component;
