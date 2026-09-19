import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2vknoy1v.css';
import '../../css/n/n4y7vlbdo.css';
import '../../css/l/lvgrsl4cb.css';
import '../../css/q/qrpz-wbzi.css';
import '../../css/a/av0-tzbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2vknoy1v"/><path class="n4y7vlbdo"/><circle class="lvgrsl4cb"/><path class="qrpz-wbzi"/><path class="av0-tzbyc"/>`,
		"fallback": "circum:stream-on",
	});
}

export default Component;
