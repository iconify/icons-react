import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvhg3tb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvhg3tb5w"/>`,
		"fallback": "keyline-icons:unlink-sharp-fill",
	});
}

export default Component;
