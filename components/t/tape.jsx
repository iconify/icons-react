import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byhi3osvb.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/diwvdacmo.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/o/ossrebcac.css';
import '../../css/u/uyob_ibrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGoFIdRbaX" class="byhi3osvb"/></defs><g class="ft5dv1b6b"><use href="#SVGoFIdRbaX"/><path class="diwvdacmo"/><g class="p_3zmsvya"><use href="#SVGoFIdRbaX"/><path class="ossrebcac"/></g><path class="uyob_ibrb"/></g>`,
		"fallback": "tdesign:tape",
	});
}

export default Component;
