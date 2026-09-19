import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5wf9mbzr.css';
import '../../css/o/o0r6dnbfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5wf9mbzr"/><path class="o0r6dnbfp"/>`,
		"fallback": "flag:pe-1x1",
	});
}

export default Component;
