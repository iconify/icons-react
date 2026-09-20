import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jfr6wqbhu.css';
import '../../css/l/l78icwe5e.css';
import '../../css/y/yny8akbhl.css';
import '../../css/i/iyirtsbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="jfr6wqbhu"/><rect class="l78icwe5e"/><rect class="yny8akbhl"/><path class="iyirtsbsi"/></g>`,
		"fallback": "lucide:qr-code",
	});
}

export default Component;
