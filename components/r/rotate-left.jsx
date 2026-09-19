import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbb2-5bwt.css';
import '../../css/o/o855tz_5q.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbb2-5bwt"/><path class="o855tz_5q"/>`,
		"fallback": "ant-design:rotate-left",
	});
}

export default Component;
