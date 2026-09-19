import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd9xvfbsl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd9xvfbsl"/>`,
		"fallback": "dinkie-icons:public-address-loudspeaker",
	});
}

export default Component;
