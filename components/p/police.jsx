import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9zji5v_l.css';
import '../../css/s/s8s9ys03v.css';
import '../../css/s/sf_in2t8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9zji5v_l"/><path class="s8s9ys03v"/><path class="sf_in2t8v"/>`,
		"fallback": "carbon:police",
	});
}

export default Component;
