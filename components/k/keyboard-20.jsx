import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5p77gmzy.css';
import '../../css/x/xetxy-b7m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5p77gmzy"/><path class="xetxy-b7m"/>`,
		"fallback": "energy-icons:keyboard-20",
	});
}

export default Component;
