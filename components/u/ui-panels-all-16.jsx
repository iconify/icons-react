import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfxn6l7fm.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfxn6l7fm"/><path clip-rule="evenodd" class="zvjeae8vn"/>`,
		"fallback": "qlementine-icons:ui-panels-all-16",
	});
}

export default Component;
