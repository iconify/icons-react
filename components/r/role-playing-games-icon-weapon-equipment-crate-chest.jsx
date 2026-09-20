import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qfckspb9n.css';
import '../../css/f/fpbdczbjj.css';
import '../../css/m/mk1fesm-h.css';
import '../../css/q/qdcfeub0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qfckspb9n"/><path class="fpbdczbjj"/><path class="mk1fesm-h"/><path class="qdcfeub0y"/></g>`,
		"fallback": "streamline-freehand:role-playing-games-icon-weapon-equipment-crate-chest",
	});
}

export default Component;
