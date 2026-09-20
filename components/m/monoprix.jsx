import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7no_ob9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7no_ob9g"/>`,
		"fallback": "thesvg-color:monoprix",
	});
}

export default Component;
