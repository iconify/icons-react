import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4ut14voh.css';
import '../../css/j/jinu42run.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4ut14voh"/><path class="jinu42run"/>`,
		"fallback": "ion:social-codepen-outline",
	});
}

export default Component;
