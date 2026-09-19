import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3_4cdcfn.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3_4cdcfn"/>`,
		"fallback": "fontisto:stumbleupon",
	});
}

export default Component;
