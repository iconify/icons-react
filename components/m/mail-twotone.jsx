import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clyynnbbx.css';
import '../../css/z/z-nk8wbnr.css';
import '../../css/x/xy4cuobbh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clyynnbbx"/><path class="z-nk8wbnr"/><path class="xy4cuobbh"/>`,
		"fallback": "ant-design:mail-twotone",
	});
}

export default Component;
