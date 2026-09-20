import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kkh-kmbcq.css';
import '../../css/n/n-qyrlynz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kkh-kmbcq"/><path class="n-qyrlynz"/></g>`,
		"fallback": "streamline-sharp:pets-allowed",
	});
}

export default Component;
