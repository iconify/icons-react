import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecl9svn7o.css';
import '../../css/s/s5sr8h31r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ecl9svn7o"/><path class="s5sr8h31r"/></g>`,
		"fallback": "fluent-emoji-flat:receipt",
	});
}

export default Component;
