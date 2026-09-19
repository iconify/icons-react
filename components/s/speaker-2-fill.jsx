import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz5sbl4bp.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz5sbl4bp"/>`,
		"fallback": "f7:speaker-2-fill",
	});
}

export default Component;
