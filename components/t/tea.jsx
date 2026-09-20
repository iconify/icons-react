import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu814jo0g.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu814jo0g"/>`,
		"fallback": "picon:tea",
	});
}

export default Component;
