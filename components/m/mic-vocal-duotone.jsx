import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4_zp4ble.css';
import '../../css/s/s9m-tlb3z.css';
import '../../css/g/gbkuyab6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x4_zp4ble"/><path class="s9m-tlb3z"/><path class="gbkuyab6x"/></g>`,
		"fallback": "lucide-extended:mic-vocal-duotone",
	});
}

export default Component;
