import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkqtqp8yr.css';
import '../../css/u/uw_8mqbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkqtqp8yr"/><path clip-rule="evenodd" class="uw_8mqbhs"/>`,
		"fallback": "si:target-fill",
	});
}

export default Component;
