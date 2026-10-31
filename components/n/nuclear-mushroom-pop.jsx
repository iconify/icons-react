import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx82a3byw.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/t/tv7zpg28d.css';
import '../../css/q/qdnmf13px.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVG5SN9EXXT" width="49" height="49" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="sx82a3byw"/></mask><g mask="url(#SVG5SN9EXXT)" class="ft5dv1b6b"><path class="vme83ob7i"/><path class="tv7zpg28d"/><path class="qdnmf13px"/></g>`,
		"fallback": "streamline-kameleon-color:nuclear-mushroom-pop",
	});
}

export default Component;
