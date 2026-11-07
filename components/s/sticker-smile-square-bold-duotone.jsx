import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glv5hj-md.css';
import '../../css/d/d3no_4bwo.css';
import '../../css/c/ctpju6bji.css';
import '../../css/j/jjk_8ebes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glv5hj-md"/><path clip-rule="evenodd" class="d3no_4bwo"/><path class="ctpju6bji"/><path class="jjk_8ebes"/>`,
		"fallback": "solar:sticker-smile-square-bold-duotone",
	});
}

export default Component;
