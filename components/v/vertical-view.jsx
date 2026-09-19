import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq33zac2x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq33zac2x"/>`,
		"fallback": "carbon:vertical-view",
	});
}

export default Component;
