import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8oaf-6wj.css';
import '../../css/g/g34yiabzj.css';
import '../../css/f/fh7l44ama.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8oaf-6wj"/><path class="g34yiabzj"/><path class="fh7l44ama"/>`,
		"fallback": "carbon:media-cast",
	});
}

export default Component;
