import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nww615dwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nww615dwv"/>`,
		"fallback": "streamline-sharp-color:lasso-tool-flat",
	});
}

export default Component;
