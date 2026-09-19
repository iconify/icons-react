import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mak8fzbhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mak8fzbhn"/>`,
		"fallback": "game-icons:mucous-pillar",
	});
}

export default Component;
