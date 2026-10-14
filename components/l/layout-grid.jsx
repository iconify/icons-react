import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hful5vo0l.css';
import '../../css/y/yys2mt-hg.css';
import '../../css/b/bgu9jmbze.css';
import '../../css/h/hiyd2bczp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="hful5vo0l"/><path class="yys2mt-hg"/><path class="bgu9jmbze"/><path class="hiyd2bczp"/></g>`,
		"fallback": "matita:layout-grid",
	});
}

export default Component;
