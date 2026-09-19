import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btpm_6era.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btpm_6era"/>`,
		"fallback": "game-icons:sticky-boot",
	});
}

export default Component;
