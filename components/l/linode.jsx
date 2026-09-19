import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdudxp5df.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdudxp5df"/>`,
		"fallback": "fa:linode",
	});
}

export default Component;
