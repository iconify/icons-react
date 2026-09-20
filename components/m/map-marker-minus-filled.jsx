import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3v3pf.css';
import '../../css/t/t5pxry.css';
import '../../css/j/jv25_c.css';
import '../../css/b/botfzx.css';
import '../../css/u/ur-omx.css';
import '../../css/s/so-from-48.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTlOlfdAj"><path class="e3v3pf t5pxry"/><circle class="jv25_c"/></mask></defs><path mask="url(#SVGTlOlfdAj)" class="botfzx"/><path class="t5pxry ur-omx"/>`,
		"fallback": "line-md:map-marker-minus-filled",
	});
}

export default Component;
