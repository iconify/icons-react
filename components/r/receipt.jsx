import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hztve7bfu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hztve7bfu"/>`,
		"fallback": "gravity-ui:receipt",
	});
}

export default Component;
