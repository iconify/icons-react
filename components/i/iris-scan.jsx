import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fkw6amalj.css';
import '../../css/w/wlje7hb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fkw6amalj"/><path class="wlje7hb2a"/></g>`,
		"fallback": "iconoir:iris-scan",
	});
}

export default Component;
