import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w8w0fkz_u.css';
import '../../css/e/e2qwtsbao.css';
import '../../css/j/jlbl7j9xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="w8w0fkz_u"/><path class="e2qwtsbao"/><circle class="jlbl7j9xd"/></g>`,
		"fallback": "struq:user",
	});
}

export default Component;
