import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbk-ufbag.css';
import '../../css/s/syww2wg1x.css';
import '../../css/h/h3qo2x5ah.css';
import '../../css/t/t5hz4nbbz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbk-ufbag"/><path class="syww2wg1x"/><path class="h3qo2x5ah"/><path class="t5hz4nbbz"/>`,
		"fallback": "energy-icons:supercapacitor-20",
	});
}

export default Component;
