import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk01hcbkv.css';

const viewBox = {"width":717,"height":691};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk01hcbkv"/>`,
		"fallback": "ls:vertical",
	});
}

export default Component;
