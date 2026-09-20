import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxpo9jkdm.css';
import '../../css/x/xg28s7bkq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxpo9jkdm"/><path class="xg28s7bkq"/>`,
		"fallback": "streamline-pixel:travel-wayfinding-balloon",
	});
}

export default Component;
