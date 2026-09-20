import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sxobkfzzi.css';
import '../../css/k/k-wrf3ppr.css';
import '../../css/g/gbagby-8i.css';
import '../../css/b/bnj4hpocw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sxobkfzzi"/><path class="k-wrf3ppr"/><path class="gbagby-8i"/><path class="bnj4hpocw"/></g>`,
		"fallback": "streamline-freehand-color:presentation-analytics",
	});
}

export default Component;
