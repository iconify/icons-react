import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2xa0wbnt.css';
import '../../css/k/k5kt1he2w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2xa0wbnt"/><path class="k5kt1he2w"/>`,
		"fallback": "ion:thunderstorm-sharp",
	});
}

export default Component;
