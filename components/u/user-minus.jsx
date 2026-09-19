import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnh9tclws.css';
import '../../css/u/up4t6029a.css';
import '../../css/f/fywxgm4ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fnh9tclws"/><circle class="up4t6029a"/><path class="fywxgm4ju"/></g>`,
		"fallback": "feather:user-minus",
	});
}

export default Component;
