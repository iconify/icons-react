import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft_s7-blo.css';
import '../../css/l/l-9yspb3a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft_s7-blo"/><path class="l-9yspb3a"/>`,
		"fallback": "openmoji:up-right-arrow",
	});
}

export default Component;
