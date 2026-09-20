import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx3_xqbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jx3_xqbix"/>`,
		"fallback": "streamline-sharp-color:wave-signal-flat",
	});
}

export default Component;
