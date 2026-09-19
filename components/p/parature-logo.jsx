import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df1l_fhyy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df1l_fhyy"/>`,
		"fallback": "fluent-mdl2:parature-logo",
	});
}

export default Component;
