import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trt9y-blp.css';

const viewBox = {"width":455,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trt9y-blp"/>`,
		"fallback": "file-icons:stylable",
	});
}

export default Component;
