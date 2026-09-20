import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8y9q0bzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g8y9q0bzy"/>`,
		"fallback": "lsicon:rice-filled",
	});
}

export default Component;
