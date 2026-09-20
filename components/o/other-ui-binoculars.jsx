import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7dlj0bmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u7dlj0bmn"/>`,
		"fallback": "streamline-block:other-ui-binoculars",
	});
}

export default Component;
