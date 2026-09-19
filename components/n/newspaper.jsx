import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbq-4rbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbq-4rbds"/>`,
		"fallback": "heroicons:newspaper",
	});
}

export default Component;
