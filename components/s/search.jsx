import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uop2qebfk.css';
import '../../css/e/ekm40idyc.css';
import '../../css/s/s64pf7cve.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uop2qebfk"/><path class="ekm40idyc"/><path class="s64pf7cve"/>`,
		"fallback": "material-icon-theme:search",
	});
}

export default Component;
