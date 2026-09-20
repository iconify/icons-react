import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urnyzzbwd.css';
import '../../css/a/as20a8ocv.css';
import '../../css/m/m5m17-bys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urnyzzbwd"/><path class="as20a8ocv"/><path class="m5m17-bys"/>`,
		"fallback": "token:pzp",
	});
}

export default Component;
