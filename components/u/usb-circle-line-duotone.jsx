import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmqwfkbdg.css';
import '../../css/a/apefvdupm.css';
import '../../css/p/p_qjaxbml.css';
import '../../css/r/r_3lljbpa.css';
import '../../css/o/oazq83bmy.css';
import '../../css/l/lpogj4adh.css';
import '../../css/d/doy9q4b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="kmqwfkbdg"/><circle class="apefvdupm"/><path class="p_qjaxbml"/><path class="r_3lljbpa"/><path class="oazq83bmy"/><path class="lpogj4adh"/><circle class="doy9q4b5f"/></g>`,
		"fallback": "solar:usb-circle-line-duotone",
	});
}

export default Component;
