import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/adl6mhr5s.css';
import '../../css/y/yp7nepsud.css';
import '../../css/z/zfrvxc26w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="adl6mhr5s"/><path class="yp7nepsud"/><circle class="zfrvxc26w"/></g>`,
		"fallback": "charm:speaker",
	});
}

export default Component;
