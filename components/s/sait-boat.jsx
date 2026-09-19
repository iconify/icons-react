import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zssdm33po.css';
import '../../css/s/s_ch1sbho.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zssdm33po"/><path class="s_ch1sbho"/>`,
		"fallback": "fontisto:sait-boat",
	});
}

export default Component;
