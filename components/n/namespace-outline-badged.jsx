import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_yhajbgl.css';
import '../../css/y/yjfke8kwc.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_yhajbgl"/><path class="yjfke8kwc"/><circle class="lmf0ecbhq"/>`,
		"fallback": "clarity:namespace-outline-badged",
	});
}

export default Component;
