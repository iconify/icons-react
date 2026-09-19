import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmi1g064l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xmi1g064l"/>`,
		"fallback": "gravity-ui:triangle-left",
	});
}

export default Component;
