import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r86lgubxd.css';
import '../../css/f/foj_0087j.css';
import '../../css/c/cch-u1bts.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r86lgubxd"/><path class="foj_0087j"/><path class="cch-u1bts"/>`,
		"fallback": "energy-icons:stethoscope-20",
	});
}

export default Component;
