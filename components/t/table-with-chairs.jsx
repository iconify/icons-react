import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnp3iub6s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnp3iub6s"/>`,
		"fallback": "pinhead:table-with-chairs",
	});
}

export default Component;
