import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-sjs80hz.css';
import '../../css/e/edfwoac-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-sjs80hz"/><circle class="edfwoac-b"/>`,
		"fallback": "selfhst:livinity-light",
	});
}

export default Component;
