import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewnp7wbzz.css';
import '../../css/k/k9ktnwbhb.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewnp7wbzz"/><path class="k9ktnwbhb"/><path clip-rule="evenodd" class="zvjeae8vn"/>`,
		"fallback": "qlementine-icons:ui-panels-bottom-16",
	});
}

export default Component;
