import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r60j53b-i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r60j53b-i"/>`,
		"fallback": "gravity-ui:square-dashed-letter-t",
	});
}

export default Component;
