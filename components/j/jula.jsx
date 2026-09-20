import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk3kf6btp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk3kf6btp"/>`,
		"fallback": "selfhst:jula",
	});
}

export default Component;
