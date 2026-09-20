import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdks22bzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jdks22bzv"/>`,
		"fallback": "streamline-sharp:smiley-shocked-solid",
	});
}

export default Component;
