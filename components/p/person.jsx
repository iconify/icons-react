import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2n2t2bus.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2n2t2bus"/>`,
		"fallback": "bi:person",
	});
}

export default Component;
