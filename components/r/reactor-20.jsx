import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g96qynbtf.css';
import '../../css/y/yqg61wbkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g96qynbtf"/><path class="yqg61wbkr"/>`,
		"fallback": "energy-icons:reactor-20",
	});
}

export default Component;
