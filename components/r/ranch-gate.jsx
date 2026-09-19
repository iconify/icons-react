import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ori6jp11a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ori6jp11a"/>`,
		"fallback": "game-icons:ranch-gate",
	});
}

export default Component;
