import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnl2_bcrh.css';
import '../../css/f/flf8qs4fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnl2_bcrh"/><path class="flf8qs4fv"/>`,
		"fallback": "mage:twtich",
	});
}

export default Component;
