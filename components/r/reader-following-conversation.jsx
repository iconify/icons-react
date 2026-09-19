import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beqxhtbkf.css';
import '../../css/w/wd6mpsb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beqxhtbkf"/><path class="wd6mpsb3w"/>`,
		"fallback": "gridicons:reader-following-conversation",
	});
}

export default Component;
