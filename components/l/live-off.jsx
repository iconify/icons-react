import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md_3dldtk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md_3dldtk"/>`,
		"fallback": "andrsrxn:live-off",
	});
}

export default Component;
