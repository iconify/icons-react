import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltmjp_5as.css';
import '../../css/g/gs4dp93ml.css';
import '../../css/f/f_ydpsblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltmjp_5as"/><path class="gs4dp93ml"/><path class="f_ydpsblm"/>`,
		"fallback": "lucide-extended:save-all-filled",
	});
}

export default Component;
