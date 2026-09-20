import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gjzoqze8y.css';
import '../../css/l/lgg2gccbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gjzoqze8y"/><path class="lgg2gccbw"/></g>`,
		"fallback": "tabler:lifebuoy",
	});
}

export default Component;
