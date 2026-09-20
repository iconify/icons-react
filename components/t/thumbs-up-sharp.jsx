import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b47299ewv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b47299ewv"/>`,
		"fallback": "keyline-icons:thumbs-up-sharp",
	});
}

export default Component;
