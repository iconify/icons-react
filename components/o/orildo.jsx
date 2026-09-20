import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnetsu-me.css';
import '../../css/j/j7goiubdd.css';

const viewBox = {"width":576,"height":619};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnetsu-me"/><path class="j7goiubdd"/>`,
		"fallback": "thesvg:orildo",
	});
}

export default Component;
