import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb61gly2t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb61gly2t"/>`,
		"fallback": "pinhead:shopping-bag-with-euro",
	});
}

export default Component;
