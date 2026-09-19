import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k150ojlno.css';
import '../../css/o/ol2nzbc1s.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k150ojlno"/><path class="ol2nzbc1s"/>`,
		"fallback": "fontisto:ship",
	});
}

export default Component;
