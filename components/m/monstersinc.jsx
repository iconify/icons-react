import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzum_2d6v.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzum_2d6v"/>`,
		"fallback": "whh:monstersinc",
	});
}

export default Component;
