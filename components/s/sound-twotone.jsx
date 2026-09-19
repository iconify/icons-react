import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aij89zban.css';
import '../../css/q/qumb2w6hl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aij89zban"/><path class="qumb2w6hl"/>`,
		"fallback": "ant-design:sound-twotone",
	});
}

export default Component;
