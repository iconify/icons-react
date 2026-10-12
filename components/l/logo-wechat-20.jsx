import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fim5e0ajp.css';
import '../../css/a/asnejb9av.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fim5e0ajp"/><path class="asnejb9av"/>`,
		"fallback": "garden:logo-wechat-20",
	});
}

export default Component;
