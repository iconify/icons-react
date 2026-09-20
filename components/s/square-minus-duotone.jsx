import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d639svbxj.css';
import '../../css/t/t3t9a1dtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d639svbxj"/><path class="t3t9a1dtl"/>`,
		"fallback": "stash:square-minus-duotone",
	});
}

export default Component;
