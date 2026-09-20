import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cazdlossv.css';
import '../../css/r/r-ctesb4d.css';
import '../../css/v/v4m2mtt9b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cazdlossv"/><path class="r-ctesb4d"/><path class="v4m2mtt9b"/></g>`,
		"fallback": "streamline-color:one-finger-tap",
	});
}

export default Component;
