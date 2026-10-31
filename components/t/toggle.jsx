import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atxbqjuzp.css';
import '../../css/l/lt8bi7bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="atxbqjuzp"/><circle class="lt8bi7bax"/></g>`,
		"fallback": "struq:toggle",
	});
}

export default Component;
