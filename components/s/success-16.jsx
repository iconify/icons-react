import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3b2z9bzs.css';
import '../../css/b/b2tyl1b2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3b2z9bzs"/><path clip-rule="evenodd" class="b2tyl1b2g"/>`,
		"fallback": "qlementine-icons:success-16",
	});
}

export default Component;
