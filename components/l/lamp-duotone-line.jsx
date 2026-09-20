import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/r/rgh-arxzp.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ieyp-ncya.css';
import '../../css/m/m_00fdcks.css';
import '../../css/v/v_fy3wb_v.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG24pTubkU"><mask id="SVGKf5YfM9c" class="n1mjunbsu"><path clip-rule="evenodd" class="rgh-arxzp"/></mask><g class="ft5dv1b6b"><path class="ieyp-ncya"/><circle class="m_00fdcks"/><path mask="url(#SVGKf5YfM9c)" class="v_fy3wb_v"/></g></mask></defs><path mask="url(#SVG24pTubkU)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:lamp-duotone-line",
	});
}

export default Component;
