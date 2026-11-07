import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arcfgd0gf.css';
import '../../css/l/l5modfp0n.css';
import '../../css/p/p_57c1bko.css';
import '../../css/b/b7f-sebqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arcfgd0gf"/><path class="l5modfp0n"/><path class="p_57c1bko"/><path class="b7f-sebqc"/>`,
		"fallback": "solar:rugby-bold-duotone",
	});
}

export default Component;
