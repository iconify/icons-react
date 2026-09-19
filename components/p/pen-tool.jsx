import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p4pwxrbiv.css';
import '../../css/s/snp4gwbyg.css';
import '../../css/c/c7q11z5lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p4pwxrbiv"/><path class="snp4gwbyg"/><circle class="c7q11z5lw"/></g>`,
		"fallback": "feather:pen-tool",
	});
}

export default Component;
