import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnah_ob2c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnah_ob2c"/>`,
		"fallback": "streamline-block:programming-bug",
	});
}

export default Component;
