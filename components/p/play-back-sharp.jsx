import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzj8srv2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzj8srv2j"/>`,
		"fallback": "ion:play-back-sharp",
	});
}

export default Component;
