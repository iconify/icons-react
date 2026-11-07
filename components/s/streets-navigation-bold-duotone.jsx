import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa4c_mbug.css';
import '../../css/o/o98yw8b4w.css';
import '../../css/x/xt-xue_6i.css';
import '../../css/k/kric1lb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa4c_mbug"/><path class="o98yw8b4w"/><path class="xt-xue_6i"/><path class="kric1lb8o"/>`,
		"fallback": "solar:streets-navigation-bold-duotone",
	});
}

export default Component;
