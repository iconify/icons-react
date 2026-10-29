import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gpsw4y9qu.css';
import '../../css/z/zq8m8cjdc.css';
import '../../css/g/g2xclxbug.css';
import '../../css/g/gmaz7hb7y.css';
import '../../css/k/koqkggbqh.css';
import '../../css/e/enf4-9bhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gpsw4y9qu wm-deco"/><path class="wm-deco zq8m8cjdc"/><path class="g2xclxbug wm-deco"/><path class="gmaz7hb7y wm-k"/><path class="koqkggbqh wm-a"/><path class="enf4-9bhe wm-k"/></g>`,
		"fallback": "withicons:tent-blueprint",
	});
}

export default Component;
