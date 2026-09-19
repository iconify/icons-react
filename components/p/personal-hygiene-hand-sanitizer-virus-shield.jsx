import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c8sat0p3t.css';
import '../../css/i/iepbu_waf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c8sat0p3t"/><path class="iepbu_waf"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-virus-shield",
	});
}

export default Component;
