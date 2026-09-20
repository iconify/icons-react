import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/o/ooaz69bmt.css';
import '../../css/c/c41dj1b8t.css';
import '../../css/e/ee3qr-bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="ooaz69bmt"/><path class="c41dj1b8t"/><path class="ee3qr-bes"/></g>`,
		"fallback": "streamline-sharp-color:synchronize-disable",
	});
}

export default Component;
