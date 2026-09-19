import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1yh2db6t.css';
import '../../css/y/yi--5skpi.css';
import '../../css/e/ehj9i9bna.css';
import '../../css/u/u505mhbii.css';
import '../../css/q/qj2_kjb-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d1yh2db6t"/><path class="yi--5skpi"/><path class="ehj9i9bna"/><rect class="u505mhbii"/><path class="qj2_kjb-u"/></g>`,
		"fallback": "fluent-emoji-flat:jar",
	});
}

export default Component;
