import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz39olz5i.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz39olz5i"/>`,
		"fallback": "fa:server",
	});
}

export default Component;
