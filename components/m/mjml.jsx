import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz_6y8b0c.css';
import '../../css/n/nbgejx56b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz_6y8b0c"/><path class="nbgejx56b"/>`,
		"fallback": "thesvg-color:mjml",
	});
}

export default Component;
