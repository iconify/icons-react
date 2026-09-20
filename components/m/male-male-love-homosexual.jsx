import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nw8x2uj-h.css';
import '../../css/h/hoxvfi_md.css';
import '../../css/t/tf30wxmwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nw8x2uj-h"/><path class="hoxvfi_md"/><path class="tf30wxmwp"/></g>`,
		"fallback": "streamline-cyber:male-male-love-homosexual",
	});
}

export default Component;
