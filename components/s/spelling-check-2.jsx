import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/a/ajrwe17rj.css';
import '../../css/d/dx7163bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ajrwe17rj"/><path class="dx7163bak"/></g>`,
		"fallback": "streamline-cyber:spelling-check-2",
	});
}

export default Component;
