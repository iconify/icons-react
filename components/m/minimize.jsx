import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg515_j0x.css';
import '../../css/g/go55dbb3w.css';
import '../../css/s/sr3x7wrjy.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg515_j0x"/><path class="go55dbb3w"/><path class="sr3x7wrjy"/>`,
		"fallback": "formkit:minimize",
	});
}

export default Component;
