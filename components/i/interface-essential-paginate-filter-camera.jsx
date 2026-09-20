import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk57eh2ic.css';
import '../../css/r/rxb3jdv2n.css';
import '../../css/y/yipyoybdp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk57eh2ic"/><path class="rxb3jdv2n"/><path class="yipyoybdp"/>`,
		"fallback": "streamline-pixel:interface-essential-paginate-filter-camera",
	});
}

export default Component;
