import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl8qmubzh.css';
import '../../css/q/qwd-pmblu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl8qmubzh"/><path class="qwd-pmblu"/>`,
		"fallback": "solar:sort-vertical-bold-duotone",
	});
}

export default Component;
