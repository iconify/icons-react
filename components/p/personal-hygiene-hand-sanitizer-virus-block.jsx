import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/irmit6ben.css';
import '../../css/c/cf-ba1bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="irmit6ben"/><path class="cf-ba1bac"/></g>`,
		"fallback": "covid:personal-hygiene-hand-sanitizer-virus-block",
	});
}

export default Component;
