import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/c9tgtdbcx.css';
import '../../css/a/ap0kgpb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="c9tgtdbcx"/><path class="ap0kgpb5t"/></g>`,
		"fallback": "streamline-cyber:medical-box",
	});
}

export default Component;
