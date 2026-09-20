import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akc294btf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akc294btf"/>`,
		"fallback": "rivet-icons:money",
	});
}

export default Component;
