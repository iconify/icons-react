import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yzqd_nbaw.css';
import '../../css/k/kyshkjbdz.css';
import '../../css/p/p8jvkw5nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="yzqd_nbaw"/><path class="kyshkjbdz"/><path class="p8jvkw5nd"/></g>`,
		"fallback": "iconamoon:question-mark-square-thin",
	});
}

export default Component;
