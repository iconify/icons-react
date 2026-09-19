import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y46s7bv9m.css';
import '../../css/q/qo2zlmuak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y46s7bv9m"/><path class="qo2zlmuak"/>`,
		"fallback": "icomoon-free:twitch",
	});
}

export default Component;
