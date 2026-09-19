import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayfdaq0vc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayfdaq0vc"/>`,
		"fallback": "game-icons:scarecrow",
	});
}

export default Component;
