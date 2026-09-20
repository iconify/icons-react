import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw8kuhb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw8kuhb6a"/>`,
		"fallback": "meteor-icons:newspaper",
	});
}

export default Component;
