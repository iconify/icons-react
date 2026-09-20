import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tmz3cbcrl.css';
import '../../css/y/yfu3bb1vx.css';
import '../../css/x/xyk6mx0ds.css';
import '../../css/b/bfhdazbsl.css';
import '../../css/z/zfc5svshd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tmz3cbcrl"/><path class="yfu3bb1vx"/><path class="xyk6mx0ds"/><path class="bfhdazbsl"/><path class="zfc5svshd"/></g>`,
		"fallback": "solar:pin-list-line-duotone",
	});
}

export default Component;
