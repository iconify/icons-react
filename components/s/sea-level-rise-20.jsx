import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t15864jur.css';
import '../../css/a/apln4p07a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t15864jur"/><path class="apln4p07a"/>`,
		"fallback": "energy-icons:sea-level-rise-20",
	});
}

export default Component;
