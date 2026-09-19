import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/c/cac4-p7tm.css';
import '../../css/a/asipl7e6a.css';
import '../../css/b/b0j8rmbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="cac4-p7tm"/><path class="asipl7e6a"/><path class="b0j8rmbql"/></g>`,
		"fallback": "iconamoon:volume-up",
	});
}

export default Component;
