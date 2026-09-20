import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6wp67bre.css';
import '../../css/b/bajlgckwi.css';
import '../../css/d/dsp8pga_u.css';
import '../../css/g/garksdshj.css';
import '../../css/y/y5_dcccvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6wp67bre"/><path class="bajlgckwi"/><path class="dsp8pga_u"/><path class="garksdshj"/><path class="y5_dcccvi"/></g>`,
		"fallback": "streamline-cyber-color:store-sale",
	});
}

export default Component;
