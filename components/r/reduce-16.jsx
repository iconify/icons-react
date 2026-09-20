import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv5ee7d2i.css';
import '../../css/j/jdm0z2b0t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv5ee7d2i"/><path class="jdm0z2b0t"/>`,
		"fallback": "qlementine-icons:reduce-16",
	});
}

export default Component;
