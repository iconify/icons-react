import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo6-r_b9m.css';
import '../../css/s/sjw8w__rs.css';
import '../../css/c/c_4mldkyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo6-r_b9m"/><path class="sjw8w__rs"/><path class="c_4mldkyu"/>`,
		"fallback": "token:pbx",
	});
}

export default Component;
