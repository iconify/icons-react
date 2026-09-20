import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h064x8_tu.css';
import '../../css/w/wcbinzmqf.css';
import '../../css/u/ujw83zbve.css';
import '../../css/d/d9qq8_b5w.css';
import '../../css/d/d3h35wbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h064x8_tu"/><path class="wcbinzmqf"/><path class="ujw83zbve"/><path class="d9qq8_b5w"/><path class="d3h35wbgg"/></g>`,
		"fallback": "streamline-ultimate-color:tea-pot",
	});
}

export default Component;
