import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvd31abxp.css';
import '../../css/t/ta7rc4bmw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvd31abxp"/><path class="ta7rc4bmw"/>`,
		"fallback": "vaadin:line-chart",
	});
}

export default Component;
