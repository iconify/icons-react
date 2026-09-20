import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnwldwb2b.css';
import '../../css/n/nuq19qbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnwldwb2b"/><path clip-rule="evenodd" class="nuq19qbcj"/>`,
		"fallback": "stash:share-duotone",
	});
}

export default Component;
