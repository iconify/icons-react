import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd0cbac6n.css';
import '../../css/y/yaf-d03di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd0cbac6n"/><path class="yaf-d03di"/>`,
		"fallback": "streamline-ultimate:martial-arts-swords-bold",
	});
}

export default Component;
