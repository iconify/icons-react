import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb_xljp9g.css';
import '../../css/e/erkje89et.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hb_xljp9g"/><path class="erkje89et"/>`,
		"fallback": "fxemoji:sunbehindcloud",
	});
}

export default Component;
