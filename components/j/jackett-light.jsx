import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzg80bc2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzg80bc2b"/>`,
		"fallback": "selfhst:jackett-light",
	});
}

export default Component;
