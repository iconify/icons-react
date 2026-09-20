import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no6glm4ku.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="no6glm4ku"/>`,
		"fallback": "streamline-flex:rocket-solid",
	});
}

export default Component;
