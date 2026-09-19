import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwghp2zfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwghp2zfx"/>`,
		"fallback": "game-icons:trophies-shelf",
	});
}

export default Component;
