import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjr7h5b7p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjr7h5b7p"/>`,
		"fallback": "f7:sportscourt-fill",
	});
}

export default Component;
