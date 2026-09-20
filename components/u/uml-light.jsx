import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn5kgc44z.css';
import '../../css/k/kzsbztbag.css';
import '../../css/a/axjbu5tsj.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn5kgc44z"/><path class="kzsbztbag"/><path class="axjbu5tsj"/>`,
		"fallback": "material-icon-theme:uml-light",
	});
}

export default Component;
