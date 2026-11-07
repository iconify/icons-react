import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv-godbfy.css';
import '../../css/o/o-08tibye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bv-godbfy"/><path class="o-08tibye"/>`,
		"fallback": "solar:panel-left-close-bold",
	});
}

export default Component;
