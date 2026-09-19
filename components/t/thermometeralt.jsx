import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw6s-92eq.css';

const viewBox = {"width":898,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw6s-92eq"/>`,
		"fallback": "whh:thermometeralt",
	});
}

export default Component;
