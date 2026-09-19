import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay6-3hbyq.css';
import '../../css/y/ymie1nvqo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay6-3hbyq"/><path class="ymie1nvqo"/>`,
		"fallback": "carbon:temperature-hot",
	});
}

export default Component;
