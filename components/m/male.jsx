import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjyn87vet.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjyn87vet"/>`,
		"fallback": "icons8:male",
	});
}

export default Component;
