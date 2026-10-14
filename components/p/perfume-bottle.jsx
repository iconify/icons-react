import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn184--be.css';
import '../../css/l/lyok8tb9e.css';
import '../../css/o/os09ombsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xn184--be"/><circle class="lyok8tb9e"/><rect class="os09ombsi"/></g>`,
		"fallback": "lucide:perfume-bottle",
	});
}

export default Component;
