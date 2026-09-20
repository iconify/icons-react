import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlo3ubbib.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jlo3ubbib"/>`,
		"fallback": "streamline-flex:story-post-solid",
	});
}

export default Component;
