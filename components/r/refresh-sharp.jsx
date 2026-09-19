import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zezrunbvz.css';
import '../../css/i/i55evib8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zezrunbvz"/><path class="i55evib8s"/>`,
		"fallback": "famicons:refresh-sharp",
	});
}

export default Component;
