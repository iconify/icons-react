import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiq_gybtr.css';
import '../../css/q/qgwq-wbxv.css';
import '../../css/f/f7ztvmbgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiq_gybtr"/><path class="qgwq-wbxv"/><path class="f7ztvmbgu"/>`,
		"fallback": "solar:panels-bottom-right-bold-duotone",
	});
}

export default Component;
