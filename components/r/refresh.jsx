import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ajr-mbblo.css';
import '../../css/s/sx2kkgt5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ajr-mbblo"/><path class="sx2kkgt5q"/></g>`,
		"fallback": "iconoir:refresh",
	});
}

export default Component;
