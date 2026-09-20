import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itclwv49h.css';
import '../../css/c/cqfpns_9k.css';
import '../../css/d/d6hv1zb-w.css';
import '../../css/a/amzoqgb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="itclwv49h"/><path class="cqfpns_9k"/><path class="d6hv1zb-w"/><path class="amzoqgb2f"/></g>`,
		"fallback": "streamline-ultimate-color:office-file-adobe",
	});
}

export default Component;
