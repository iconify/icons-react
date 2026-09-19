import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyw-o0bqi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hyw-o0bqi"/>`,
		"fallback": "gravity-ui:text-outdent",
	});
}

export default Component;
