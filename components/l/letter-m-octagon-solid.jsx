import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvz9emb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvz9emb-n"/>`,
		"fallback": "mynaui:letter-m-octagon-solid",
	});
}

export default Component;
