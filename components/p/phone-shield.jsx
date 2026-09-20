import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak-9-dbup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak-9-dbup"/>`,
		"fallback": "streamline-flex:phone-shield",
	});
}

export default Component;
