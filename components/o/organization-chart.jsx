import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdf_ixb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdf_ixb2c"/>`,
		"fallback": "ri:organization-chart",
	});
}

export default Component;
