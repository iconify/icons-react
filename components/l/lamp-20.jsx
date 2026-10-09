import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozhwhlihc.css';
import '../../css/k/kr4l01btv.css';
import '../../css/n/nrn-6ibeo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozhwhlihc"/><path class="kr4l01btv"/><path class="nrn-6ibeo"/>`,
		"fallback": "energy-icons:lamp-20",
	});
}

export default Component;
