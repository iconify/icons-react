import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajn19m5qg.css';
import '../../css/c/cadm6kfiu.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajn19m5qg"/><path class="cadm6kfiu"/>`,
		"fallback": "lineicons:warning",
	});
}

export default Component;
