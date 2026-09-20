import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_90onbxw.css';
import '../../css/l/l9oavwvjg.css';
import '../../css/s/sgkyoxxea.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_90onbxw"/><circle class="l9oavwvjg"/><path class="sgkyoxxea"/>`,
		"fallback": "material-icon-theme:test-ts",
	});
}

export default Component;
