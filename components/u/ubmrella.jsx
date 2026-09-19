import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw2dlnbkb.css';
import '../../css/v/v9dpfoiga.css';
import '../../css/a/aoo_rum3k.css';
import '../../css/o/o8lh7zb8w.css';
import '../../css/t/t6re57f-o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jw2dlnbkb"/><path clip-rule="evenodd" class="v9dpfoiga"/><path clip-rule="evenodd" class="aoo_rum3k"/><path clip-rule="evenodd" class="o8lh7zb8w"/><path clip-rule="evenodd" class="t6re57f-o"/>`,
		"fallback": "flat-ui:ubmrella",
	});
}

export default Component;
