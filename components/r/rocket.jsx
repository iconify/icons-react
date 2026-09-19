import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1_setxkq.css';
import '../../css/b/bu8lizbbx.css';
import '../../css/l/l9ibikb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1_setxkq"/><path class="bu8lizbbx"/><path class="l9ibikb1j"/>`,
		"fallback": "ion:rocket",
	});
}

export default Component;
