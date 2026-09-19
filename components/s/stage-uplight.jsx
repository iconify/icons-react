import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyrcckmae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyrcckmae"/>`,
		"fallback": "cbi:stage-uplight",
	});
}

export default Component;
