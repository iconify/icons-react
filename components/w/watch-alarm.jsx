import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vay3fhb-l.css';
import '../../css/v/v90gbqbox.css';
import '../../css/b/bj0il3jox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vay3fhb-l"/><circle class="v90gbqbox"/><path class="bj0il3jox"/></g>`,
		"fallback": "lucide-lab:watch-alarm",
	});
}

export default Component;
