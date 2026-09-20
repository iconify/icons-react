import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njnm-jvpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njnm-jvpe"/>`,
		"fallback": "keyline-icons:square-slash-sharp",
	});
}

export default Component;
