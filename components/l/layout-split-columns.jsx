import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqfzl6bim.css';
import '../../css/n/n8kf28bbi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGRVeuBdhT)"><path clip-rule="evenodd" class="gqfzl6bim"/></g><defs><clipPath id="SVGRVeuBdhT"><path class="n8kf28bbi"/></clipPath></defs></g>`,
		"fallback": "gravity-ui:layout-split-columns",
	});
}

export default Component;
