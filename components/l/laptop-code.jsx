import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7wp6fi0u.css';
import '../../css/x/xe2sc8z7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7wp6fi0u"/><path class="xe2sc8z7i"/>`,
		"fallback": "pixel:laptop-code",
	});
}

export default Component;
