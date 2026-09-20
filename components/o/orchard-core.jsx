import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcbuc8xts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcbuc8xts"/>`,
		"fallback": "thesvg-color:orchard-core",
	});
}

export default Component;
