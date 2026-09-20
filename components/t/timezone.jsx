import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgkedx2vt.css';
import '../../css/n/n01fju59i.css';
import '../../css/i/ilf33kbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgkedx2vt"/><path class="n01fju59i"/><path class="ilf33kbod"/></g>`,
		"fallback": "tabler:timezone",
	});
}

export default Component;
