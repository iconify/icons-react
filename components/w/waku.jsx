import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0isaxfvi.css';
import '../../css/z/znm6qw9zy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0isaxfvi"/><path class="znm6qw9zy"/>`,
		"fallback": "thesvg-color:waku",
	});
}

export default Component;
