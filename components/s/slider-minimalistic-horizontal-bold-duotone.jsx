import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy178tbuh.css';
import '../../css/s/skftdzbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jy178tbuh"/><path class="skftdzbtg"/>`,
		"fallback": "solar:slider-minimalistic-horizontal-bold-duotone",
	});
}

export default Component;
