import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa4c_mbug.css';
import '../../css/j/juwk50edv.css';
import '../../css/p/p6myf1z6f.css';
import '../../css/x/xt-xue_6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa4c_mbug"/><path class="juwk50edv"/><path class="p6myf1z6f"/><path class="xt-xue_6i"/>`,
		"fallback": "solar:streets-navigation-bold",
	});
}

export default Component;
