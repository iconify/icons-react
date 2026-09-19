import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5ct3xu4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v5ct3xu4f"/>`,
		"fallback": "gravity-ui:square-letter-p",
	});
}

export default Component;
