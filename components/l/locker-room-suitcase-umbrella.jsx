import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dm0kexnkt.css';
import '../../css/g/gwjpso23e.css';
import '../../css/l/lc1x4oxgh.css';
import '../../css/x/x23oeih7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dm0kexnkt"/><path class="gwjpso23e"/><path class="lc1x4oxgh"/><path class="x23oeih7d"/></g>`,
		"fallback": "streamline-freehand-color:locker-room-suitcase-umbrella",
	});
}

export default Component;
