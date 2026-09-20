import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw0hygbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw0hygbgt"/>`,
		"fallback": "thesvg:streamlake",
	});
}

export default Component;
