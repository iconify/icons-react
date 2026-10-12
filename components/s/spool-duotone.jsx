import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnib-fkdq.css';
import '../../css/v/vpnmvd67u.css';
import '../../css/f/fqk39fbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnib-fkdq"/><path class="vpnmvd67u"/><path class="fqk39fbdn"/></g>`,
		"fallback": "lucide-extended:spool-duotone",
	});
}

export default Component;
