import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y724vccmi.css';
import '../../css/t/tsblyv2ha.css';
import '../../css/n/nhgm_2bse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y724vccmi"/><path class="tsblyv2ha"/><path class="nhgm_2bse"/>`,
		"fallback": "streamline-ultimate:layers-stacked-bold",
	});
}

export default Component;
