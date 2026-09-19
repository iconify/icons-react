import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8dmqzbdr.css';
import '../../css/g/ge7idsbtu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8dmqzbdr"/><path class="ge7idsbtu"/>`,
		"fallback": "ant-design:notification-twotone",
	});
}

export default Component;
