import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m55j3uj5v.css';
import '../../css/r/ri0jf-b7o.css';
import '../../css/h/hkyoaf6el.css';

const viewBox = {"width":600,"height":147.3,"left":20.5,"top":248.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m55j3uj5v"/><path class="ri0jf-b7o"/><path class="hkyoaf6el"/>`,
		"fallback": "thesvg-color:trustpilot",
	});
}

export default Component;
