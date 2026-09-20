import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da9y1yr3s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da9y1yr3s"/>`,
		"fallback": "pinhead:person-riding-horse",
	});
}

export default Component;
