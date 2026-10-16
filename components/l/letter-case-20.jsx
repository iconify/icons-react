import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2v02vmol.css';
import '../../css/m/m4hmbobqb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2v02vmol"/><path class="m4hmbobqb"/>`,
		"fallback": "energy-icons:letter-case-20",
	});
}

export default Component;
