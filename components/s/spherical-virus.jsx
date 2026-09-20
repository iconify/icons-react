import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szy79o-jx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szy79o-jx"/>`,
		"fallback": "pinhead:spherical-virus",
	});
}

export default Component;
