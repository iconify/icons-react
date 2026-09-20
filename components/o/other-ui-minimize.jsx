import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r79vzpj4a.css';
import '../../css/b/bijcxwbhj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r79vzpj4a"/><path class="bijcxwbhj"/>`,
		"fallback": "streamline-block:other-ui-minimize",
	});
}

export default Component;
