import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeyv90bgs.css';
import '../../css/q/qrmgfrbnf.css';
import '../../css/p/peei90bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zeyv90bgs"/><path class="qrmgfrbnf"/><path clip-rule="evenodd" class="peei90bcs"/>`,
		"fallback": "solar:routing-2-bold",
	});
}

export default Component;
