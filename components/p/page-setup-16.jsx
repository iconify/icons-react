import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5f1s0biu.css';
import '../../css/z/zput1obaq.css';
import '../../css/c/c6q4vpbxk.css';
import '../../css/d/da06ybbfk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5f1s0biu"/><path class="zput1obaq"/><path clip-rule="evenodd" class="c6q4vpbxk"/><path clip-rule="evenodd" class="da06ybbfk"/>`,
		"fallback": "qlementine-icons:page-setup-16",
	});
}

export default Component;
