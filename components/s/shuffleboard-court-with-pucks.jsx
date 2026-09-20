import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5g7d5bvq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5g7d5bvq"/>`,
		"fallback": "pinhead:shuffleboard-court-with-pucks",
	});
}

export default Component;
