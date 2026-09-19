import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwi2mlprc.css';
import '../../css/m/mp-hme0is.css';
import '../../css/k/kozuxzbrc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwi2mlprc"/><path class="mp-hme0is"/><circle class="kozuxzbrc"/>`,
		"fallback": "ion:lock-combination",
	});
}

export default Component;
