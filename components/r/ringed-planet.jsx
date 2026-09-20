import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3lszrbzu.css';
import '../../css/j/j7m3f7b1x.css';
import '../../css/y/yjbv-9bhr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/othqjtbbj.css';
import '../../css/j/j-5u9wban.css';
import '../../css/d/dlws54b1v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="u3lszrbzu"/><path class="j7m3f7b1x"/><path class="yjbv-9bhr"/><g class="jn8qy4bru"><path class="othqjtbbj"/><path class="j-5u9wban"/><path class="dlws54b1v"/></g>`,
		"fallback": "openmoji:ringed-planet",
	});
}

export default Component;
