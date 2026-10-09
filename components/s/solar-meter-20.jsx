import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3ux1061w.css';
import '../../css/h/hupodmbea.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3ux1061w"/><path class="hupodmbea"/>`,
		"fallback": "energy-icons:solar-meter-20",
	});
}

export default Component;
