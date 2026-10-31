import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/akp692bkr.css';
import '../../css/g/gic9po5yn.css';
import '../../css/h/hhwgsyjct.css';
import '../../css/f/fquzhwn-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="akp692bkr wm-shadow"/><path class="gic9po5yn wm-shadow"/><path class="hhwgsyjct"/><path class="fquzhwn-n"/></g>`,
		"fallback": "withicons-brutal:volume",
	});
}

export default Component;
