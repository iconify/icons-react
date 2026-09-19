import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrzzp4k-p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrzzp4k-p"/>`,
		"fallback": "carbon:text-wrap",
	});
}

export default Component;
