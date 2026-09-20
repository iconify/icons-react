import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hgg513b4r.css';
import '../../css/s/sjv6x5bsu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hgg513b4r"/><path class="sjv6x5bsu"/></g>`,
		"fallback": "streamline-color:location-pin-disabled-flat",
	});
}

export default Component;
