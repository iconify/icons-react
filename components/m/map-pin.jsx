import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2htj5fzp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2htj5fzp"/>`,
		"fallback": "gravity-ui:map-pin",
	});
}

export default Component;
