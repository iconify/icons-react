import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il7_fobub.css';
import '../../css/q/qty0zwbsq.css';
import '../../css/f/fagpc2blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il7_fobub"/><path class="qty0zwbsq"/><path class="fagpc2blc"/>`,
		"fallback": "eva:layers-fill",
	});
}

export default Component;
