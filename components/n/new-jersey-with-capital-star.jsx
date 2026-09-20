import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ast8-dbzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ast8-dbzz"/>`,
		"fallback": "pinhead:new-jersey-with-capital-star",
	});
}

export default Component;
