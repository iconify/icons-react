import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypditfboi.css';
import '../../css/j/j2j3gdcfi.css';
import '../../css/x/xxphl5biz.css';
import '../../css/y/yo5mywban.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypditfboi"/><path class="j2j3gdcfi"/><path class="xxphl5biz"/><path class="yo5mywban"/>`,
		"fallback": "ion:mouse",
	});
}

export default Component;
