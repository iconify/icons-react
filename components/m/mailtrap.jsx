import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnevdwq3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnevdwq3f"/>`,
		"fallback": "thesvg-color:mailtrap",
	});
}

export default Component;
