import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x16vlc8os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x16vlc8os"/>`,
		"fallback": "mingcute:planet-fill",
	});
}

export default Component;
