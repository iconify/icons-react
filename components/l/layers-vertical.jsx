import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln33uabds.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ln33uabds"/>`,
		"fallback": "gravity-ui:layers-vertical",
	});
}

export default Component;
