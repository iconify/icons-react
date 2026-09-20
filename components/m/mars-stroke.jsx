import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hmkgulsyz.css';
import '../../css/x/x5-bqdb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hmkgulsyz"/><circle class="x5-bqdb3a"/></g>`,
		"fallback": "lucide:mars-stroke",
	});
}

export default Component;
