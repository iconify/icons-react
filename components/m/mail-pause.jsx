import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv8njj-dn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv8njj-dn"/>`,
		"fallback": "fluent-mdl2:mail-pause",
	});
}

export default Component;
