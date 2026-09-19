import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud8zcybxg.css';
import '../../css/s/snzv8lbca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud8zcybxg"/><path class="snzv8lbca"/>`,
		"fallback": "carbon:volume-file-storage",
	});
}

export default Component;
