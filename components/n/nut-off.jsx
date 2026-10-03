import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oyv7fkp9q.css';
import '../../css/e/efxrnncom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oyv7fkp9q"/><path class="efxrnncom"/></g>`,
		"fallback": "lucide:nut-off",
	});
}

export default Component;
