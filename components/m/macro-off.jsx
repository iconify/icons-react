import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ag8bvqgej.css';
import '../../css/o/o1680-biq.css';
import '../../css/q/qw5jhabtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ag8bvqgej"/><path class="o1680-biq"/><path class="qw5jhabtx"/></g>`,
		"fallback": "tabler:macro-off",
	});
}

export default Component;
