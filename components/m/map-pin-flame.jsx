import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iwds29bqs.css';
import '../../css/z/z_97-pnbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iwds29bqs"/><path class="z_97-pnbl"/></g>`,
		"fallback": "tabler:map-pin-flame",
	});
}

export default Component;
