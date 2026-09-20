import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q7d54sbwc.css';
import '../../css/k/k8xwvxi_d.css';
import '../../css/t/tgiuk7b5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q7d54sbwc"/><path class="k8xwvxi_d"/><path class="tgiuk7b5k"/></g>`,
		"fallback": "streamline-flex-color:merge-pdf-flat",
	});
}

export default Component;
