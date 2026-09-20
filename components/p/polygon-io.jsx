import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vprg18qvn.css';

const viewBox = {"width":290,"height":79};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vprg18qvn"/>`,
		"fallback": "thesvg:polygon-io",
	});
}

export default Component;
