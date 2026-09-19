import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmdjj56ue.css';
import '../../css/w/wwh205bot.css';
import '../../css/u/upfqz6b3a.css';
import '../../css/m/m7321gbhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmdjj56ue"/><path class="wwh205bot"/><path class="upfqz6b3a"/><path class="m7321gbhi"/>`,
		"fallback": "flag:sr-1x1",
	});
}

export default Component;
