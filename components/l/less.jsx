import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3wj-lbtg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3wj-lbtg"/>`,
		"fallback": "cib:less",
	});
}

export default Component;
