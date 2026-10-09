import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh02dzb5a.css';
import '../../css/u/ufrf-lbjb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh02dzb5a"/><path class="ufrf-lbjb"/>`,
		"fallback": "energy-icons:sort-desc-20",
	});
}

export default Component;
