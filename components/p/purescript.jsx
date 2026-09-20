import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np5n44mha.css';
import '../../css/j/j5tmw1bvx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np5n44mha"/><path class="j5tmw1bvx"/>`,
		"fallback": "material-icon-theme:purescript",
	});
}

export default Component;
