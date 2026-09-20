import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j43ytubal.css';
import '../../css/z/zzs5uk6nm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j43ytubal"/><path clip-rule="evenodd" class="zzs5uk6nm"/>`,
		"fallback": "qlementine-icons:open-recent-16",
	});
}

export default Component;
