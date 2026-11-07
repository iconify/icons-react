import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c39303b3x.css';
import '../../css/g/gdbv4de5j.css';
import '../../css/t/tcxp3ubtd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c39303b3x"/><path class="gdbv4de5j"/><path class="tcxp3ubtd"/>`,
		"fallback": "solar:wallet-2-bold-duotone",
	});
}

export default Component;
