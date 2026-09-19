import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp9a7dbdx.css';
import '../../css/d/dcr78hbrq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp9a7dbdx"/><path class="dcr78hbrq"/>`,
		"fallback": "carbon:radio-combat",
	});
}

export default Component;
