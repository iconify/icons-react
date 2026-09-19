import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5bgb_b8s.css';
import '../../css/c/csm28-9_z.css';
import '../../css/b/bdkeo7bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5bgb_b8s"/><path class="csm28-9_z"/><path class="bdkeo7bdd"/>`,
		"fallback": "fontisto:parasol",
	});
}

export default Component;
