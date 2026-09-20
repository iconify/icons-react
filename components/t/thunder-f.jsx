import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lps5dbbll.css';

const viewBox = {"width":24,"height":24,"left":-7.5,"top":-3.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lps5dbbll"/>`,
		"fallback": "jam:thunder-f",
	});
}

export default Component;
