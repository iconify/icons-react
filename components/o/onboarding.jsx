import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkjn7ebvp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkjn7ebvp"/>`,
		"fallback": "fluent-mdl2:onboarding",
	});
}

export default Component;
