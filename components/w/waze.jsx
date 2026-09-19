import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt560hjnz.css';
import '../../css/b/bk7elybvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt560hjnz"/><path class="bk7elybvl"/>`,
		"fallback": "bxl:waze",
	});
}

export default Component;
