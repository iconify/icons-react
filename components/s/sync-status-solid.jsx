import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caxrc5bwk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caxrc5bwk"/>`,
		"fallback": "fluent-mdl2:sync-status-solid",
	});
}

export default Component;
