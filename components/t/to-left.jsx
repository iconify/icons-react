import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0s5_pdyc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0s5_pdyc"/>`,
		"fallback": "icon-park-outline:to-left",
	});
}

export default Component;
