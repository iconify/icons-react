import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5j1k6bfd.css';
import '../../css/v/vgmnmwbyq.css';
import '../../css/z/z_lmsqylr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5j1k6bfd"/><path class="vgmnmwbyq"/><path class="z_lmsqylr"/>`,
		"fallback": "fluent-emoji-high-contrast:person-gesturing-ok",
	});
}

export default Component;
