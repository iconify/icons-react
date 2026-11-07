import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddb602buy.css';
import '../../css/z/z84lzbbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddb602buy"/><path class="z84lzbbag"/>`,
		"fallback": "solar:refresh-bold-duotone",
	});
}

export default Component;
