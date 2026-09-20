import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o2dydi33t.css';
import '../../css/t/t-u0yzblp.css';
import '../../css/e/eax14mbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o2dydi33t"/><circle class="t-u0yzblp"/><path class="eax14mbeg"/></g>`,
		"fallback": "lucide:user-x",
	});
}

export default Component;
