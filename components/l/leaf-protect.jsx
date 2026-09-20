import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p8iprbrdn.css';
import '../../css/y/ylkly4inx.css';
import '../../css/c/cg8lkxbdy.css';
import '../../css/b/b07-no6jc.css';
import '../../css/j/j-4sjlbnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="p8iprbrdn"/><path class="ylkly4inx"/><path class="cg8lkxbdy"/><path class="b07-no6jc"/><path class="j-4sjlbnq"/></g>`,
		"fallback": "streamline-plump-color:leaf-protect",
	});
}

export default Component;
