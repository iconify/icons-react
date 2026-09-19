import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-1rzx--n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-1rzx--n"/>`,
		"fallback": "ant-design:moon-outlined",
	});
}

export default Component;
