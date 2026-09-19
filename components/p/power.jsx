import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viie0hb-o.css';
import '../../css/f/fiyd37bsz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viie0hb-o"/><path class="fiyd37bsz"/>`,
		"fallback": "carbon:power",
	});
}

export default Component;
