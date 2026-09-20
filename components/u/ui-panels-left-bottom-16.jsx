import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt7nfbcvj.css';
import '../../css/n/n00h-vihv.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt7nfbcvj"/><path class="n00h-vihv"/><path clip-rule="evenodd" class="zvjeae8vn"/>`,
		"fallback": "qlementine-icons:ui-panels-left-bottom-16",
	});
}

export default Component;
