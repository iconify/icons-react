import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxsw_71mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxsw_71mi"/>`,
		"fallback": "thesvg-color:rockstar-games",
	});
}

export default Component;
