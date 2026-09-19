import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba_3tvb6x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba_3tvb6x"/>`,
		"fallback": "cib:orcid",
	});
}

export default Component;
