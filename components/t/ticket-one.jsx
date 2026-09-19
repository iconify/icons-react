import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/m/mkcveibug.css';
import '../../css/z/zzqn8_sjh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGz1QUNeza"><g class="hv130ab-t"><path class="mkcveibug"/><path class="zzqn8_sjh"/></g></mask></defs><path mask="url(#SVGz1QUNeza)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:ticket-one",
	});
}

export default Component;
