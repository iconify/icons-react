import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dun1dyudb.css';
import '../../css/j/j48cmzb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dun1dyudb"/><path class="j48cmzb9x"/>`,
		"fallback": "tdesign:system-blocked-filled",
	});
}

export default Component;
