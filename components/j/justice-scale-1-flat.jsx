import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iqwi9ibyi.css';
import '../../css/p/pwny34e7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iqwi9ibyi"/><path class="pwny34e7g"/></g>`,
		"fallback": "streamline-color:justice-scale-1-flat",
	});
}

export default Component;
