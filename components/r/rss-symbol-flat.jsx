import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sgxm49bio.css';
import '../../css/r/r044ubbtk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sgxm49bio"/><path class="r044ubbtk"/></g>`,
		"fallback": "streamline-color:rss-symbol-flat",
	});
}

export default Component;
