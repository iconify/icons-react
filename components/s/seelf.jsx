import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjyyrubdb.css';
import '../../css/z/zfi4u7tyy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjyyrubdb"/><path class="zfi4u7tyy"/>`,
		"fallback": "selfhst:seelf",
	});
}

export default Component;
