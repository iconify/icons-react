import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4haf-2fn.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4haf-2fn"/>`,
		"fallback": "gis:skeletonize",
	});
}

export default Component;
