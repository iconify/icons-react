import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_0pz_gks.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_0pz_gks"/>`,
		"fallback": "f7:mic-slash",
	});
}

export default Component;
