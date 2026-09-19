import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/h/haoy1x21t.css';
import '../../css/o/o-a42bbih.css';
import '../../css/c/cz-xh6lnw.css';
import '../../css/n/nh4beurhc.css';
import '../../css/p/p5-mijbop.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="haoy1x21t"/><path class="o-a42bbih"/><path class="cz-xh6lnw"/><path class="nh4beurhc"/><rect class="p5-mijbop"/></g>`,
		"fallback": "icon-park:lip-gloss",
	});
}

export default Component;
