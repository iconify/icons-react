import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzs5177np.css';
import '../../css/l/lgqt567fo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzs5177np"/><path class="lgqt567fo"/>`,
		"fallback": "energy-icons:message-sparkle-20",
	});
}

export default Component;
