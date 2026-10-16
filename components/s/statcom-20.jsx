import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/says4171o.css';
import '../../css/o/oyczihcab.css';
import '../../css/w/w0wgm5b_c.css';
import '../../css/f/foabbbb8e.css';
import '../../css/w/wtqq7v8-v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="says4171o"/><path class="oyczihcab"/><path class="w0wgm5b_c"/><path class="foabbbb8e"/><path class="wtqq7v8-v"/>`,
		"fallback": "energy-icons:statcom-20",
	});
}

export default Component;
