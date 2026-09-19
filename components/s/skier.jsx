import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcg9scxgt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcg9scxgt"/>`,
		"fallback": "game-icons:skier",
	});
}

export default Component;
