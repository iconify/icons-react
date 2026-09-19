import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igbjqgb3u.css';
import '../../css/s/sdwvt0b9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igbjqgb3u"/><path class="sdwvt0b9m"/>`,
		"fallback": "ion:ios-desktop",
	});
}

export default Component;
