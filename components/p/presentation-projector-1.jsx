import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/urdc96bbo.css';
import '../../css/y/yrwyo22db.css';
import '../../css/a/awbyonb8h.css';
import '../../css/r/r_vybwbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="urdc96bbo"/><path class="yrwyo22db"/><path class="awbyonb8h"/><path class="r_vybwbpu"/></g>`,
		"fallback": "streamline-freehand-color:presentation-projector-1",
	});
}

export default Component;
