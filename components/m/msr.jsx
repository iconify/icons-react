import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2j5sfbdy.css';
import '../../css/m/md286fbip.css';
import '../../css/a/ajp9kqb-b.css';
import '../../css/c/c4p7gdcer.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="r2j5sfbdy"/><g class="md286fbip"><path class="ajp9kqb-b"/><path class="c4p7gdcer"/></g></g>`,
		"fallback": "cryptocurrency-color:msr",
	});
}

export default Component;
