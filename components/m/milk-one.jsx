import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t9_qf8b-g.css';
import '../../css/q/q8a4nn9wz.css';
import '../../css/w/w_-8qfbfw.css';
import '../../css/c/cw5otdbod.css';
import '../../css/u/u2pm5hcoc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc8ThbbFe"><g class="wwvp95byt"><path class="t9_qf8b-g"/><path class="q8a4nn9wz"/><path class="w_-8qfbfw"/><path class="cw5otdbod"/><path class="u2pm5hcoc"/></g></mask></defs><path mask="url(#SVGc8ThbbFe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:milk-one",
	});
}

export default Component;
