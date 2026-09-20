import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzjso_7pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzjso_7pd"/>`,
		"fallback": "mdi:tipper-lorry",
	});
}

export default Component;
