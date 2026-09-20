import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-nncpbct.css';
import '../../css/f/fegjfdjdz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-nncpbct"/><path class="fegjfdjdz"/>`,
		"fallback": "streamline-pixel:interface-essential-cog-double",
	});
}

export default Component;
