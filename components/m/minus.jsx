import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkrpub5im.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkrpub5im"/>`,
		"fallback": "jam:minus",
	});
}

export default Component;
