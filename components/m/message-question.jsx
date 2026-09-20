import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sdycol47i.css';
import '../../css/g/gmpt436mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sdycol47i"/><path class="gmpt436mv"/></g>`,
		"fallback": "reicon:message-question",
	});
}

export default Component;
