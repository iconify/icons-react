import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um39my9-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um39my9-e"/>`,
		"fallback": "octicon:mirror-24",
	});
}

export default Component;
