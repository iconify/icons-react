import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq2h2if7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq2h2if7w"/>`,
		"fallback": "icon-park-outline:level-four-title",
	});
}

export default Component;
