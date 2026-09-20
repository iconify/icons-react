import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz00btnxs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz00btnxs"/>`,
		"fallback": "streamline:rain-cloud-solid",
	});
}

export default Component;
