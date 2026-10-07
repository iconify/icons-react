import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9il_abql.css';
import '../../css/z/zyyizacqb.css';
import '../../css/c/c7q11z5lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w9il_abql"/><path class="zyyizacqb"/><circle class="c7q11z5lw"/></g>`,
		"fallback": "lucide:pen-tool",
	});
}

export default Component;
