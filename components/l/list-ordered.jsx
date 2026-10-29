import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3jt7lijj.css';
import '../../css/t/tl3piacvt.css';
import '../../css/z/zw5s43bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3jt7lijj wm-k"/><path class="tl3piacvt wm-a"/><path class="wm-a zw5s43bbo"/>`,
		"fallback": "withicons-bauhaus:list-ordered",
	});
}

export default Component;
