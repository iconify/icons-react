import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8-k94bvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8-k94bvs"/>`,
		"fallback": "la:object-group-solid",
	});
}

export default Component;
