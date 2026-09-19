import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihqnimbid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihqnimbid"/>`,
		"fallback": "icon-park-outline:spikedshoes",
	});
}

export default Component;
