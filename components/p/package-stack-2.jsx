import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/b69otkwly.css';
import '../../css/t/t8rml_j2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="b69otkwly"/><path class="t8rml_j2t"/></g>`,
		"fallback": "streamline-cyber:package-stack-2",
	});
}

export default Component;
