import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/a/af1aaacyg.css';
import '../../css/g/gah4mqlpm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="af1aaacyg"/><path class="gah4mqlpm"/></g>`,
		"fallback": "catppuccin:meson",
	});
}

export default Component;
