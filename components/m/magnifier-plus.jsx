import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k42670bpw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k42670bpw"/>`,
		"fallback": "gravity-ui:magnifier-plus",
	});
}

export default Component;
