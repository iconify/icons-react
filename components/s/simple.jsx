import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjdjckgkp.css';
import '../../css/s/sy3etbb8p.css';
import '../../css/p/ps55_-69a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle transform="rotate(-45 36 36)" class="gjdjckgkp"/><path class="sy3etbb8p"/><circle class="ps55_-69a"/>`,
		"fallback": "openmoji:simple",
	});
}

export default Component;
