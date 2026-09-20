import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4d2-cb4w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4d2-cb4w"/>`,
		"fallback": "pinhead:petrine-cross",
	});
}

export default Component;
