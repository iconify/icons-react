import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbwm7p47f.css';
import '../../css/o/olyf9ubyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbwm7p47f"/><path class="olyf9ubyh"/>`,
		"fallback": "pixel:sound-on",
	});
}

export default Component;
