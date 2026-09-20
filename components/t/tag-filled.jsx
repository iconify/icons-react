import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur7kpoblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur7kpoblk"/>`,
		"fallback": "tabler:tag-filled",
	});
}

export default Component;
