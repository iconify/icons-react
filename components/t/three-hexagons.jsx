import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/n/n95gqt_fs.css';
import '../../css/v/vt616c4jv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><path class="n95gqt_fs"/><path class="vt616c4jv"/></g>`,
		"fallback": "icon-park-solid:three-hexagons",
	});
}

export default Component;
