import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9nlhebhf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z9nlhebhf"/>`,
		"fallback": "streamline-flex:share-link-solid",
	});
}

export default Component;
