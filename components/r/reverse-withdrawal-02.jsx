import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b5qbfpbuf.css';
import '../../css/n/nhvgerb4l.css';
import '../../css/a/a4nuxyb-f.css';
import '../../css/t/tt-7ni6ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b5qbfpbuf"/><path class="nhvgerb4l"/><circle class="a4nuxyb-f"/><path class="tt-7ni6ag"/></g>`,
		"fallback": "hugeicons:reverse-withdrawal-02",
	});
}

export default Component;
