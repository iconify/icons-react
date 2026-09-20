import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smn_1ccdc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="smn_1ccdc"/>`,
		"fallback": "streamline-flex:share-link-remix",
	});
}

export default Component;
