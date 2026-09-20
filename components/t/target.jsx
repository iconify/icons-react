import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axarcbb2r.css';
import '../../css/r/rikk_tbdt.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="axarcbb2r"/><circle class="rikk_tbdt"/><circle class="n1xy6nh9u"/></g>`,
		"fallback": "proicons:target",
	});
}

export default Component;
