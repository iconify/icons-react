import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl_8k3bvg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl_8k3bvg"/>`,
		"fallback": "streamline-plump:music-note-trebble-clef-solid",
	});
}

export default Component;
