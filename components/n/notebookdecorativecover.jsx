import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao_coaa1a.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/s/so1r549_h.css';
import '../../css/t/t4d2qxx5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao_coaa1a"/><path class="o6g1-kwkw"/><path class="so1r549_h"/><path class="t4d2qxx5t"/>`,
		"fallback": "fxemoji:notebookdecorativecover",
	});
}

export default Component;
