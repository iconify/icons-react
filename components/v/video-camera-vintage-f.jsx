import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tym57sy9w.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tym57sy9w"/>`,
		"fallback": "jam:video-camera-vintage-f",
	});
}

export default Component;
