import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj9tgdmli.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uj9tgdmli"/>`,
		"fallback": "gravity-ui:triangle-exclamation",
	});
}

export default Component;
