import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gxn-lchhn.css';
import '../../css/g/gp0egaclj.css';
import '../../css/j/jj1uypb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gxn-lchhn"/><circle class="gp0egaclj"/><path class="jj1uypb1j"/></g>`,
		"fallback": "akar-icons:money",
	});
}

export default Component;
