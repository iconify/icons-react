import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/da38b_bez.css';
import '../../css/m/ma4nqdb6e.css';
import '../../css/r/rgses48gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="da38b_bez"/><circle class="ma4nqdb6e"/><path class="rgses48gq"/></g>`,
		"fallback": "lucide-lab:pin-safety",
	});
}

export default Component;
