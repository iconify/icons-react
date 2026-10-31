import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaq777bmt.css';
import '../../css/g/gghhl7bfh.css';
import '../../css/h/h4djq3b_y.css';
import '../../css/t/tn4munfne.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaq777bmt"/><path class="gghhl7bfh"/><path class="h4djq3b_y"/><path class="tn4munfne"/>`,
		"fallback": "tabler-flags:rwanda",
	});
}

export default Component;
