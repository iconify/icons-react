import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl4tf0b_w.css';
import '../../css/z/z916qcbra.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl4tf0b_w"/><path class="z916qcbra"/>`,
		"fallback": "carbon:save-model",
	});
}

export default Component;
