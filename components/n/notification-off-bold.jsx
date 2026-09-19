import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvlvhpb4k.css';
import '../../css/r/rbns1x26b.css';
import '../../css/u/umzj1472b.css';
import '../../css/b/bg3j-3buk.css';
import '../../css/g/gq0qt0sbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cvlvhpb4k"><path class="rbns1x26b"/><circle class="umzj1472b"/><path class="bg3j-3buk"/><path class="gq0qt0sbu"/></g>`,
		"fallback": "iconamoon:notification-off-bold",
	});
}

export default Component;
