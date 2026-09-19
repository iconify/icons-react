import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilwj9wk9f.css';
import '../../css/g/gzzb74pus.css';
import '../../css/d/de29zjbhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ilwj9wk9f"/><path class="gzzb74pus"/><path class="de29zjbhg"/></g>`,
		"fallback": "fluent-emoji-flat:raising-hands-dark",
	});
}

export default Component;
