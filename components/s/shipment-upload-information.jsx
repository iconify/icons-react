import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g635niwpv.css';
import '../../css/h/hwdm3r8bh.css';
import '../../css/u/umi0alh0y.css';
import '../../css/g/gn43k9b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g635niwpv"/><path class="hwdm3r8bh"/><path class="umi0alh0y"/><path class="gn43k9b2h"/></g>`,
		"fallback": "streamline-ultimate-color:shipment-upload-information",
	});
}

export default Component;
