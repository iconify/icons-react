import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/mefbpt.css';
import '../../css/b/bqwbxe.css';
import '../../css/l/ln6moz.css';
import '../../css/s/so-from-54.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-4px.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-pjbx7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c mefbpt"/><circle class="bqwbxe"/><path class="a0m25c ln6moz"/>`,
		"fallback": "line-md:my-location",
	});
}

export default Component;
