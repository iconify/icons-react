import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2o73kb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2o73kb7n"/>`,
		"fallback": "thesvg:thurgauer-kantonalbank",
	});
}

export default Component;
