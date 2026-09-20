import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb5qhfflw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb5qhfflw"/>`,
		"fallback": "thesvg:playstation-4",
	});
}

export default Component;
