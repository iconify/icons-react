import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzm4hubxj.css';
import '../../css/p/px297bcje.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzm4hubxj"/><path class="px297bcje"/>`,
		"fallback": "nimbus:store",
	});
}

export default Component;
