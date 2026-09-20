import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h81zrmtfz.css';
import '../../css/b/bd0kl15xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="h81zrmtfz"/><path class="bd0kl15xd"/></g>`,
		"fallback": "proicons:page-margins",
	});
}

export default Component;
