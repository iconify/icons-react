import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqk6wrb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqk6wrb5p"/>`,
		"fallback": "griddy-icons:layout-alt-01",
	});
}

export default Component;
