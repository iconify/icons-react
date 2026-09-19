import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awwetebdu.css';
import '../../css/p/pyttu4r7k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awwetebdu"/><path clip-rule="evenodd" class="pyttu4r7k"/>`,
		"fallback": "devicon-plain:nixos",
	});
}

export default Component;
