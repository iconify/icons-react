import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lho92t1bf.css';
import '../../css/b/b0ecixu6h.css';
import '../../css/r/rgr7m0cyo.css';
import '../../css/s/slfwgqo0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lho92t1bf"/><path class="b0ecixu6h"/><path class="rgr7m0cyo"/><path class="slfwgqo0d"/>`,
		"fallback": "uim:user-nurse",
	});
}

export default Component;
