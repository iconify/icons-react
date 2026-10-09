import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0ni6vb5b.css';
import '../../css/i/i75_mcddu.css';
import '../../css/g/gqyz_obje.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0ni6vb5b"/><path class="i75_mcddu"/><path class="gqyz_obje"/>`,
		"fallback": "energy-icons:seabed-habitat-20",
	});
}

export default Component;
