import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd_695mew.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kd_695mew"/>`,
		"fallback": "gravity-ui:scales-unbalanced",
	});
}

export default Component;
