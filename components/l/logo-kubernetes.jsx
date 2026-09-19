import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpjvikbjg.css';
import '../../css/g/gleiq_5ax.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpjvikbjg"/><path class="gleiq_5ax"/>`,
		"fallback": "carbon:logo-kubernetes",
	});
}

export default Component;
