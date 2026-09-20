import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwb2ztm3s.css';
import '../../css/s/sz-8khbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwb2ztm3s"/><path class="sz-8khbph"/>`,
		"fallback": "octicon:repo-locked-24",
	});
}

export default Component;
