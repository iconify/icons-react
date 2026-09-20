import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/z/z_eyx5noj.css';
import '../../css/r/ro1nd0bow.css';
import '../../css/n/nltp0hx2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="z_eyx5noj"/><path class="ro1nd0bow"/><path class="nltp0hx2m"/></g>`,
		"fallback": "streamline-cyber:picture-6",
	});
}

export default Component;
