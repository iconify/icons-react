import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx95jbbja.css';
import '../../css/x/xcxa9bb7a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx95jbbja"/><path class="xcxa9bb7a"/>`,
		"fallback": "garden:rocket-fill-20",
	});
}

export default Component;
