import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhr7jzdyv.css';
import '../../css/y/yj4ra116h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhr7jzdyv"/><path class="yj4ra116h"/>`,
		"fallback": "material-icon-theme:istanbul",
	});
}

export default Component;
