import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rko7y9uyp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rko7y9uyp"/>`,
		"fallback": "dinkie-icons:keycap-eleven-small",
	});
}

export default Component;
