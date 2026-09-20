import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea87w3l9f.css';
import '../../css/a/a59njwb5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea87w3l9f"/><path class="a59njwb5r"/>`,
		"fallback": "selfhst:visual-studio-code-light",
	});
}

export default Component;
