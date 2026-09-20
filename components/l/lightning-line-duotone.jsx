import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a6isywbiq.css';
import '../../css/y/ygae94b0i.css';
import '../../css/c/ch2lzac4s.css';
import '../../css/h/h0m2o-pur.css';
import '../../css/k/kv9osebmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a6isywbiq"/><path class="ygae94b0i"/><path class="ch2lzac4s"/><path class="h0m2o-pur"/><path class="kv9osebmj"/></g>`,
		"fallback": "solar:lightning-line-duotone",
	});
}

export default Component;
