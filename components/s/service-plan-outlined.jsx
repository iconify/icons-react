import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxydanhms.css';
import '../../css/e/egw0_e_yk.css';
import '../../css/g/grhwfqo-l.css';
import '../../css/d/dtbe3abpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxydanhms"/><circle class="egw0_e_yk"/><path class="grhwfqo-l"/><path class="dtbe3abpb"/>`,
		"fallback": "eos-icons:service-plan-outlined",
	});
}

export default Component;
