import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nvz2em_xq.css';
import '../../css/g/gwvf-pb5g.css';
import '../../css/h/hzw4hpcrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nvz2em_xq"/><path class="gwvf-pb5g"/><path class="hzw4hpcrv"/></g>`,
		"fallback": "streamline-freehand-color:presentation-podium-notes",
	});
}

export default Component;
