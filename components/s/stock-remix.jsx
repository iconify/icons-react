import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr-9dwl7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fr-9dwl7n"/>`,
		"fallback": "streamline-sharp:stock-remix",
	});
}

export default Component;
