import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf57ohj7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf57ohj7b"/>`,
		"fallback": "ix:video-file",
	});
}

export default Component;
