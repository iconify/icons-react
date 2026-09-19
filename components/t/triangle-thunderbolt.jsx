import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beko8jbyo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="beko8jbyo"/>`,
		"fallback": "gravity-ui:triangle-thunderbolt",
	});
}

export default Component;
