import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k20av7rgb.css';
import '../../css/h/hzik1vb6f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k20av7rgb"/><path class="hzik1vb6f"/>`,
		"fallback": "carbon:snow-density",
	});
}

export default Component;
