import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwdk8rb8z.css';
import '../../css/g/g32g6sb1v.css';
import '../../css/w/w5iegtdxh.css';
import '../../css/o/or1tl4bac.css';
import '../../css/j/j2po2xbbc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwdk8rb8z"/><path class="g32g6sb1v"/><path class="w5iegtdxh"/><path class="or1tl4bac"/><path class="j2po2xbbc"/>`,
		"fallback": "iconito:lentil",
	});
}

export default Component;
