import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbqjqnimp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jbqjqnimp"/>`,
		"fallback": "streamline-sharp-color:sign-hashtag-flat",
	});
}

export default Component;
