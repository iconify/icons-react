import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weah1dbwi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weah1dbwi"/>`,
		"fallback": "f7:logo-android",
	});
}

export default Component;
