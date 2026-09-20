import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcpmebi7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcpmebi7i"/>`,
		"fallback": "streamline-sharp:recording-tape-2",
	});
}

export default Component;
