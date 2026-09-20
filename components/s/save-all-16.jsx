import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv05p5bjy.css';
import '../../css/z/zu9zkld_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv05p5bjy"/><path clip-rule="evenodd" class="zu9zkld_z"/>`,
		"fallback": "qlementine-icons:save-all-16",
	});
}

export default Component;
