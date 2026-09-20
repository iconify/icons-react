import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/u/upw4uybpj.css';
import '../../css/c/c9r80smca.css';
import '../../css/p/p97k87b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="upw4uybpj"/><path class="c9r80smca"/><path class="p97k87b6q"/></g>`,
		"fallback": "streamline-sharp-color:safari",
	});
}

export default Component;
