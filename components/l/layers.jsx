import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpn_zqbzh.css';
import '../../css/r/rcaxrbcwv.css';
import '../../css/k/k2_638ciz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpn_zqbzh"/><path class="rcaxrbcwv"/><path class="k2_638ciz"/>`,
		"fallback": "boxicons:layers",
	});
}

export default Component;
