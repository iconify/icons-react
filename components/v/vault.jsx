import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npyeo_9pe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npyeo_9pe"/>`,
		"fallback": "gravity-ui:vault",
	});
}

export default Component;
