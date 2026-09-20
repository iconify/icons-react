import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/d/d5xqsbbkn.css';
import '../../css/o/oqx9b0dfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="d5xqsbbkn"/><path class="oqx9b0dfy"/></g>`,
		"fallback": "tdesign:mode-embedding",
	});
}

export default Component;
