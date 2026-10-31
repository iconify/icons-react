import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aa0wmq5ja.css';
import '../../css/r/rdujlubva.css';
import '../../css/m/mzk___bch.css';
import '../../css/o/o4varmbwk.css';
import '../../css/z/zkiovpu_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aa0wmq5ja wm-shadow"/><path class="rdujlubva wm-shadow"/><path class="mzk___bch"/><path class="o4varmbwk"/><path class="zkiovpu_b"/></g>`,
		"fallback": "withicons-brutal:text-cursor-input",
	});
}

export default Component;
