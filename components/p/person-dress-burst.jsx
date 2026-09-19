import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpo__26yq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpo__26yq"/>`,
		"fallback": "fa7-solid:person-dress-burst",
	});
}

export default Component;
