import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cditb06mx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cditb06mx"/>`,
		"fallback": "streamline-plump:recycle-bin-2-solid",
	});
}

export default Component;
