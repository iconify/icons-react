import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ymv2uu5iv.css';
import '../../css/a/aj9cdbcjg.css';
import '../../css/a/a5ps3ubbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ymv2uu5iv"/><path class="aj9cdbcjg"/><path class="a5ps3ubbp"/></g>`,
		"fallback": "hugeicons:star-award-01",
	});
}

export default Component;
