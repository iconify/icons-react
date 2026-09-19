import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubqvv0hqj.css';
import '../../css/d/d1fhs3bbv.css';
import '../../css/i/if869vbfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubqvv0hqj"/><path class="d1fhs3bbv"/><path class="if869vbfn"/>`,
		"fallback": "fxemoji:snail",
	});
}

export default Component;
