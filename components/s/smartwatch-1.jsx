import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kmustyv3p.css';
import '../../css/d/ddl23w0uf.css';
import '../../css/z/z8hpmebck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="kmustyv3p"/><path class="ddl23w0uf"/><path class="z8hpmebck"/></g>`,
		"fallback": "streamline-cyber:smartwatch-1",
	});
}

export default Component;
