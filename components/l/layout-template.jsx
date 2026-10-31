import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pm10nib3l.css';
import '../../css/w/w69tt5b5x.css';
import '../../css/e/ec_vzom-t.css';
import '../../css/b/be7es10ib.css';
import '../../css/f/fwnb34_iv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pm10nib3l wm-shadow"/><path class="w69tt5b5x wm-shadow"/><path class="ec_vzom-t"/><path class="be7es10ib"/><path class="fwnb34_iv"/></g>`,
		"fallback": "withicons-brutal:layout-template",
	});
}

export default Component;
