import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2o2k5bfa.css';
import '../../css/e/eafmg15uh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2o2k5bfa"/><path class="eafmg15uh"/>`,
		"fallback": "ep:picture-rounded",
	});
}

export default Component;
