import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ano20bb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ano20bb9g"/>`,
		"fallback": "thesvg:pingdom",
	});
}

export default Component;
