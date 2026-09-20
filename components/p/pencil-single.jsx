import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9687bcgq.css';
import '../../css/p/po09tr52l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9687bcgq"/><path clip-rule="evenodd" class="po09tr52l"/>`,
		"fallback": "stash:pencil-single",
	});
}

export default Component;
