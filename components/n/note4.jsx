import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jf5cqsbal.css';
import '../../css/w/wv1zmp9ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jf5cqsbal"/><path class="wv1zmp9ps"/></g>`,
		"fallback": "reicon:note4",
	});
}

export default Component;
