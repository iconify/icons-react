import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xhk2zpbbc.css';
import '../../css/s/sqdpvrbkf.css';
import '../../css/v/v8ptlt_jd.css';
import '../../css/m/m4buozbeh.css';
import '../../css/l/l6z2i9b7y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="xhk2zpbbc"/><path class="sqdpvrbkf"/><path class="v8ptlt_jd"/><circle class="m4buozbeh"/><path class="l6z2i9b7y"/></g>`,
		"fallback": "icon-park:permissions",
	});
}

export default Component;
