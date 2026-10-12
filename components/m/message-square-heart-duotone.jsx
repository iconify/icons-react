import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvo8mpb5j.css';
import '../../css/a/ajdn0d18j.css';
import '../../css/y/yc3cfbbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvo8mpb5j"/><path clip-rule="evenodd" class="ajdn0d18j"/><path class="yc3cfbbxb"/></g>`,
		"fallback": "lucide-extended:message-square-heart-duotone",
	});
}

export default Component;
