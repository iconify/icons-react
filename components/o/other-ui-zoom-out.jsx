import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxt49qctb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxt49qctb"/>`,
		"fallback": "streamline-block:other-ui-zoom-out",
	});
}

export default Component;
