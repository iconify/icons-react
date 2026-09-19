import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc2-ddicz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc2-ddicz"/>`,
		"fallback": "icons8:upload-2",
	});
}

export default Component;
