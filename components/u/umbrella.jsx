import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/njc2mxbou.css';
import '../../css/w/wjpb1abqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="njc2mxbou"/><path class="wjpb1abqp"/></g>`,
		"fallback": "charm:umbrella",
	});
}

export default Component;
