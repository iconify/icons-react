import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd4vpr87g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dd4vpr87g"/>`,
		"fallback": "streamline-flex:tall-hat-solid",
	});
}

export default Component;
