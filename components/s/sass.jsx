import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6w906bqc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6w906bqc"/>`,
		"fallback": "fa7-brands:sass",
	});
}

export default Component;
