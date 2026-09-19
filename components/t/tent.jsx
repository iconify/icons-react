import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q_2m_xbrx.css';
import '../../css/z/z1jwvkgas.css';
import '../../css/y/y3z90mb8g.css';
import '../../css/r/r6femfb0m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGScXhYdjV"><g class="wwvp95byt"><path class="q_2m_xbrx"/><path class="z1jwvkgas"/><path class="y3z90mb8g"/><path class="r6femfb0m"/></g></mask></defs><path mask="url(#SVGScXhYdjV)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:tent",
	});
}

export default Component;
