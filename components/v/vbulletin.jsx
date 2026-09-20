import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnbkpls5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnbkpls5w"/>`,
		"fallback": "thesvg-color:vbulletin",
	});
}

export default Component;
