import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-adm0bmn.css';
import '../../css/z/zdes4i07z.css';
import '../../css/o/oawqqplkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-adm0bmn"/><path class="zdes4i07z"/><path class="oawqqplkr"/>`,
		"fallback": "energy-icons:pipeline-20",
	});
}

export default Component;
