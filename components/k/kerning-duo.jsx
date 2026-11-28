import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te-0wwbjb.css';
import '../../css/b/b7lokjbbo.css';
import '../../css/r/rj3muccfq.css';
import '../../css/g/g4atl3bti.css';
import '../../css/p/pb7pd8bft.css';
import '../../css/j/j3-367beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="te-0wwbjb"/><path class="b7lokjbbo"/><path class="rj3muccfq"/><path class="g4atl3bti"/><path class="pb7pd8bft"/><path class="j3-367beq"/></g>`,
		"fallback": "iconaut:kerning-duo",
	});
}

export default Component;
