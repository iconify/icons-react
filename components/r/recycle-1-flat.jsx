import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brwsvfk3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="brwsvfk3w"/>`,
		"fallback": "streamline-sharp-color:recycle-1-flat",
	});
}

export default Component;
