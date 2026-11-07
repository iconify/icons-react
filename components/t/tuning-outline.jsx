import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd-g4xjxg.css';
import '../../css/p/pzp40rbgb.css';
import '../../css/w/weeljg33q.css';
import '../../css/o/o_0no9brk.css';
import '../../css/l/l26jvib9m.css';
import '../../css/b/b4zvoks8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd-g4xjxg"/><path clip-rule="evenodd" class="pzp40rbgb"/><path clip-rule="evenodd" class="weeljg33q"/><path class="o_0no9brk"/><path class="l26jvib9m"/><path class="b4zvoks8i"/>`,
		"fallback": "solar:tuning-outline",
	});
}

export default Component;
