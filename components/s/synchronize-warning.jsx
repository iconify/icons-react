import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/f/fqann9wgm.css';
import '../../css/j/ju2m-998g.css';
import '../../css/y/ybfbp-b2q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="fqann9wgm"/><path class="ju2m-998g"/><path class="ybfbp-b2q"/></g>`,
		"fallback": "streamline-color:synchronize-warning",
	});
}

export default Component;
