import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/huxdyz4vm.css';
import '../../css/n/ndexczbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="huxdyz4vm"/><path class="ndexczbun"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-liquid-virus-block",
	});
}

export default Component;
