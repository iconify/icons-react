import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_27_r5nz.css';
import '../../css/e/eq9gn9j-x.css';
import '../../css/q/qffzx6bky.css';
import '../../css/n/ndz5l4bzj.css';
import '../../css/g/g8lb9mxql.css';
import '../../css/n/nw-ujc66u.css';
import '../../css/i/i1k62qbfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_27_r5nz"/><path class="eq9gn9j-x"/><path class="qffzx6bky"/><path class="ndz5l4bzj"/><path class="g8lb9mxql"/><path class="nw-ujc66u"/><path class="i1k62qbfw"/>`,
		"fallback": "selfhst:solarassistant",
	});
}

export default Component;
