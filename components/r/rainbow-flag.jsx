import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g08b50b4w.css';
import '../../css/o/o78nwabjy.css';
import '../../css/e/efecdr5kx.css';
import '../../css/q/qmmaa4_cq.css';
import '../../css/k/kjc4kukwa.css';
import '../../css/d/dl163ol9y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g08b50b4w"/><path class="o78nwabjy"/><path class="efecdr5kx"/><path class="qmmaa4_cq"/><path class="kjc4kukwa"/><path class="dl163ol9y"/></g>`,
		"fallback": "fluent-emoji-flat:rainbow-flag",
	});
}

export default Component;
