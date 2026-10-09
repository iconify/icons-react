import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utpm0pbkq.css';
import '../../css/g/gl28njbdi.css';
import '../../css/m/m-7py9b-g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utpm0pbkq"/><path class="gl28njbdi"/><path class="m-7py9b-g"/>`,
		"fallback": "energy-icons:mirror-20",
	});
}

export default Component;
