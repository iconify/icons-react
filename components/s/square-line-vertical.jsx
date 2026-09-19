import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3-by5b3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a3-by5b3a"/>`,
		"fallback": "gravity-ui:square-line-vertical",
	});
}

export default Component;
