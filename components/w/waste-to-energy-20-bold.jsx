import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxu_906s.css';
import '../../css/f/f9aktpbth.css';
import '../../css/p/p8fzstjth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbxu_906s"/><path class="f9aktpbth"/><path class="p8fzstjth"/>`,
		"fallback": "energy-icons:waste-to-energy-20-bold",
	});
}

export default Component;
