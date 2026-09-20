import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvuhb7b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvuhb7b5s"/>`,
		"fallback": "thesvg-color:tabelog",
	});
}

export default Component;
