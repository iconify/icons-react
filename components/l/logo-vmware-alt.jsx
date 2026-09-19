import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcr1zdwxc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcr1zdwxc"/>`,
		"fallback": "carbon:logo-vmware-alt",
	});
}

export default Component;
