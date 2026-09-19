import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od73i4b2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="od73i4b2g"/>`,
		"fallback": "gravity-ui:list-timeline",
	});
}

export default Component;
