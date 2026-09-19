import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dldsi0b_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dldsi0b_z"/>`,
		"fallback": "cib:unreal-engine",
	});
}

export default Component;
