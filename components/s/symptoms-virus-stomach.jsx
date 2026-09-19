import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g10gp-wox.css';
import '../../css/n/ndrnx-byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g10gp-wox"/><path class="ndrnx-byj"/></g>`,
		"fallback": "covid:symptoms-virus-stomach",
	});
}

export default Component;
