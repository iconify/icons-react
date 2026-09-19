import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsrtapblj.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsrtapblj"/>`,
		"fallback": "fa6-solid:j",
	});
}

export default Component;
